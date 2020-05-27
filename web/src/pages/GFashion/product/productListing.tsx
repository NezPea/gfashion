import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QueryString from 'query-string';
import { ProductDetail } from '../../../app/types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { selectProductList, fetchProductList } from '../../../app/slices/productListSlice';
import { Grid } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MainFrameFullWidth from '../../../components/MainFrame';
import ProductGrid from '../../../components/Product/productGrid';
import Filter from '../../../components/Filter/filter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LoadingSpinner from '../../../components/Common/loadingSpinner';
import banner from '../../../assets/images/banner.jpg';

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
      margin: 0
    },
    productHeader: {
      color: theme.palette.text.secondary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    content: {
      marginTop: '20px'
    },
    dropdownControl: {
      background: 'transparent',
      margin: theme.spacing(1),
      minWidth: 120,
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
      padding: '20px 40px',
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
  }),
);

const generateQuery = (categoryId: string, queryValues: QueryString.ParsedQuery<string>) => {
  let query = `?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${categoryId}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`;
  Object.entries(queryValues).map(([key, value]) => {
    switch (key.toLowerCase()) {
      case 'page':
        query += `&searchCriteria[currentPage]=${value}`;
        break;
      case 'pagesize':
        query += `&searchCriteria[pageSize]=${value}`;
        break;
      case 'sort':
        let sort = (value as string).split('-');
        if (sort.length === 2) {
          query += `&searchCriteria[sortOrders][0][field]=${sort[0]}&searchCriteria[sortOrders][0][direction]=${sort[1]}`;
        }
        break;
      default:
        query += `&searchCriteria[filter_groups][3][filters][0][field]=${key}&searchCriteria[filter_groups][3][filters][0][value]=${value}&searchCriteria[filter_groups][3][filters][0][condition_type]=eq`
        break;
    }
    return null
  })

  if (!queryValues.pageSize) {
    query += `&searchCriteria[pageSize]=20`;
  }

  return encodeURIComponent(query)
};

const GFashionProductListing = ({ match, location }: { match: any, location: any }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [productArray, setProductArray] = useState<ProductDetail[]>([]);
  const [queryState, setQueryState] = useState<QueryString.ParsedQuery<string>>(QueryString.parse(location.search));
  const categoryId = match && match.params && match.params.categoryId;
  let productListResult = useSelector(selectProductList);

  const handleSort = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log(event.target.value as string);
  };

  const handleLoadMore = () => {
    let queryRequest = generateQuery(categoryId, queryState);
    dispatch(fetchProductList({
      // url: `/product-list?${queryRequest}` // local mock data
      url: `/channelProducts/${queryRequest}`
    }));
    if (queryState.page) {
      setQueryState({
        ...queryState,
        page: (parseInt((queryState.page as string)) + 1).toString()
      })
    } else {
      setQueryState({
        ...queryState,
        page: "1"
      })
    }
  }

  useEffect(() => {
    if (categoryId) {
      let queryRequest = generateQuery(categoryId, queryState);
      dispatch(fetchProductList({
        // url: `/product-list?${queryRequest}` // local mock data
        url: `/channelProducts/${queryRequest}`
      }));
    }
    // eslint-disable-next-line
  }, [categoryId]);

  useEffect(() => {
    if (productListResult.detail && productListResult.detail.items && productListResult.detail.items.length) {
      setProductArray(productArray.concat(productListResult.detail.items));
    }
    // eslint-disable-next-line
  }, [productListResult]);

  return (
    <MainFrameFullWidth>
      {
        productArray.length ? (
          <div className={classes.root}>
            <div className={classes.banner}></div>
            <div className={classes.contentContainer}>
              <Grid container spacing={3} justify="center" className={classes.header}>
                <Grid item xs={3}>
                  <h2 className={classes.categoryTitle}>家具</h2>
                </Grid>
                <Grid item xs={9} className={classes.productHeader}>
                  {productListResult.detail ? productListResult.detail.total_count : 0} Products found
                  <FormControl variant="outlined" className={classes.dropdownControl}>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value="popularity"
                      IconComponent={ExpandMoreIcon}
                      onChange={handleSort}
                      className={classes.dropdown}
                      classes={{
                        root: classes.dropdownInput
                      }}
                    >
                      <MenuItem value="popularity">按销量</MenuItem>
                      <MenuItem value="price">按价格</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={3} justify="center" className={classes.content}>
                <Grid item xs={3}>
                  <Filter />
                </Grid>
                <Grid item xs={9}>
                  <ProductGrid products={productArray} />
                  {
                    (productListResult.detail?.total_count! > productListResult.detail?.search_criteria.page_size! * (productListResult.detail?.search_criteria.current_page! + 1)) &&
                    <button className={classes.loadMore} onClick={handleLoadMore}>Load more</button>
                  }
                </Grid>
              </Grid>
            </div>
          </div>
        ) : (
            <div className={classes.spinner}>
              <LoadingSpinner />
            </div>
          )
      }
    </MainFrameFullWidth>
  )
}

export default GFashionProductListing
