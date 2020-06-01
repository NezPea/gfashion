import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import QueryString from 'query-string'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { I18N, I18N_NS } from './_i18n'
import { ProductDetail } from '../../../app/types'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  selectProductList,
  fetchProductList
} from '../../../app/slices/productListSlice'
import { Grid, FormControl, Select } from '@material-ui/core'
import MainFrameFullWidth from '../../../components/MainFrame'
import ProductGrid from '../../../components/Product/productGrid'
import Filter from '../../../components/Filter/filter'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LoadingSpinner from '../../../components/Common/loadingSpinner'
import banner from '../../../assets/images/banner.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(7)
    },
    spinner: {
      display: 'inline-block',
      margin: `${theme.spacing(10)}px auto`,
      position: 'relative',
      left: 'calc(50% - 50px)'
    },
    banner: {
      backgroundImage: `url(${banner})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: 'calc(100vw - (100vw - 100%))',
      height: '400px',
      position: 'absolute',
      left: 0,
      top: '65px'
    },
    contentContainer: {
      maxWidth: '1400px',
      margin: 'auto'
    },
    header: {
      marginTop: '420px'
    },
    categoryTitle: {
      color: theme.palette.secondary.main,
      fontSize: '28px',
      margin: 0,
      paddingLeft: theme.spacing(2)
    },
    productHeader: {
      color: theme.palette.text.secondary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    content: {
      marginTop: '20px'
    },
    dropdownControl: {
      background: 'transparent',
      margin: theme.spacing(1),
      minWidth: 120
    },
    dropdown: {
      borderRadius: 0
    },
    dropdownInput: {
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    },
    description: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      padding: '20px 40px'
    },
    row: {
      marginTop: theme.spacing(5)
    },
    loadMore: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
      cursor: 'pointer',
      display: 'block',
      fontSize: '14px',
      width: '60%',
      margin: 'auto',
      padding: theme.spacing(2)
    }
  })
)

const generateQuery = (
  categoryId: string,
  queryValues: QueryString.ParsedQuery<string>
) => {
  let query = `?category_id,${categoryId},eq`
  Object.entries(queryValues).map(([key, value]) => {
    switch (key.toLowerCase()) {
      case 'page':
        query += `&currentPage=${value}`
        break
      case 'pagesize':
        query += `pageSize=${value}`
        break
      case 'sort':
        let sort = (value as string).split('-')
        if (sort.length === 2) {
          query += `&sortField=${sort[0]}&sortDirection=${sort[1]}`
        }
        break
      default:
        query += `&${key},${value},eq`
        break
    }
    return null
  })

  if (!queryValues.pageSize) {
    query += `&pageSize=20`
  }

  return query
}

const GFashionProductListing = ({
  match,
  location
}: {
  match: any
  location: any
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation(I18N_NS)
  const [productArray, setProductArray] = useState<ProductDetail[]>([])
  const [queryState, setQueryState] = useState<QueryString.ParsedQuery<string>>(
    QueryString.parse(location.search)
  )
  const categoryId = match && match.params && match.params.categoryId
  let productListResult = useSelector(selectProductList)

  const handleSort = (event: React.ChangeEvent<{ value: unknown }>) => {
    setProductArray([])
    if (event.target.value) {
      setQueryState({
        ...queryState,
        sort: event.target.value as string
      })
    }
  }

  const handleLoadMore = () => {
    if (queryState.page) {
      setQueryState({
        ...queryState,
        page: (parseInt(queryState.page as string) + 1).toString()
      })
    } else {
      setQueryState({
        ...queryState,
        page: '2'
      })
    }
  }

  const handleFilterAdd = (filters: QueryString.ParsedQuery<string>) => {
    setProductArray([])
    setQueryState({
      ...queryState,
      ...filters
    })
  }

  const handleRemoveFilter = (code: string) => {
    let query = { ...queryState }
    delete query[code]
    setProductArray([])
    setQueryState(query)
  }

  useEffect(() => {
    if (categoryId) {
      let queryRequest = generateQuery(categoryId, queryState)
      dispatch(
        fetchProductList({
          // url: `/product-list?${queryRequest}` // local mock data
          url: `/channelProducts/${queryRequest}`
        })
      )
    }
    // eslint-disable-next-line
  }, [categoryId, queryState])

  useEffect(() => {
    if (
      productListResult.detail &&
      productListResult.detail.items &&
      productListResult.detail.items.length
    ) {
      setProductArray(productArray.concat(productListResult.detail.items))
    }
    // eslint-disable-next-line
  }, [productListResult])

  return (
    <MainFrameFullWidth>
      <Helmet>
        <title>
          {productListResult.detail
            ? productListResult.detail.category_name + ' | '
            : ''}
          {t(I18N.product._seo.title)}
        </title>
      </Helmet>
      {productArray.length ? (
        <div className={classes.root}>
          <div className={classes.banner}></div>
          <div className={classes.contentContainer}>
            <Grid
              container
              spacing={3}
              justify="center"
              className={classes.header}>
              <Grid item xs={5} md={3}>
                <h2 className={classes.categoryTitle}>
                  {productListResult.detail
                    ? productListResult.detail.category_name
                    : ''}
                </h2>
              </Grid>
              <Grid item xs={7} md={9} className={classes.productHeader}>
                {t(I18N.product.total_count, {
                  totalCount: productListResult.detail
                    ? productListResult.detail.total_count
                    : 0
                })}
                <FormControl
                  variant="outlined"
                  className={classes.dropdownControl}>
                  <Select
                    native
                    defaultValue={
                      queryState.sort ? queryState.sort : 'popularity-desc'
                    }
                    IconComponent={ExpandMoreIcon}
                    onChange={handleSort}
                    className={classes.dropdown}
                    classes={{
                      root: classes.dropdownInput
                    }}>
                    <option value="popularity-desc">
                      {t(I18N.product.sort.popularity_desc)}
                    </option>
                    <option value="popularity-asc">
                      {t(I18N.product.sort.popularity_asc)}
                    </option>
                    <option value="price-desc">
                      {t(I18N.product.sort.price_desc)}
                    </option>
                    <option value="price-asc">
                      {t(I18N.product.sort.price_asc)}
                    </option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={3}
              justify="center"
              className={classes.content}>
              <Grid item xs={3}>
                <Filter
                  onFilterAdd={handleFilterAdd}
                  onFilterRemove={handleRemoveFilter}
                />
              </Grid>
              <Grid item xs={9}>
                <ProductGrid products={productArray} />
                {productListResult.detail?.total_count! >
                  productListResult.detail?.search_criteria.page_size! *
                    (productListResult.detail?.search_criteria.current_page! +
                      1) && (
                  <button className={classes.loadMore} onClick={handleLoadMore}>
                    Load more
                  </button>
                )}
              </Grid>
            </Grid>
          </div>
        </div>
      ) : (
        <div className={classes.spinner}>
          <LoadingSpinner />
        </div>
      )}
    </MainFrameFullWidth>
  )
}

export default GFashionProductListing
