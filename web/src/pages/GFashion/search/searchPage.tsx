import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QueryString from 'query-string';
import { ProductDetail } from '../../../app/types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { selectProductList, fetchProductList } from '../../../app/slices/productListSlice';
import { Grid, Divider } from '@material-ui/core';
import MainFrameFullWidth from '../../../components/MainFrame';
import ProductGrid from '../../../components/Product/productGrid';
import DesignerCard from '../../../components/Designer/designerCard';
import BrandCard from '../../../components/Brand/brandCard';
import Filter from '../../../components/Filter/filter';
import LoadingSpinner from '../../../components/Common/loadingSpinner';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(7),
      maxWidth: '1400px',
      margin: 'auto'
    },
    spinner: {
      display: 'inline-block',
      margin: `${theme.spacing(10)}px auto`,
      position: 'relative',
      left: 'calc(50% - 50px)'
    },
    header: {
      marginTop: '20px'
    },
    searchTitle: {
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
    contentTitle: {
      marginBottom: '30px'
    },
    designerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gridGap: theme.spacing(1)
    },
    brandGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
      gridGap: theme.spacing(10)
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

const generateQuery = (searchTerm: string, queryValues: QueryString.ParsedQuery<string>) => {
  let query = `?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${searchTerm}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`;
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

const GFashionSearchListing = ({ match, location }: { match: any, location: any }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [productArray, setProductArray] = useState<ProductDetail[]>([]);
  const [queryState, setQueryState] = useState<QueryString.ParsedQuery<string>>(QueryString.parse(location.search));
  const searchTerm = match && match.params && match.params.searchTerm;
  let productListResult = useSelector(selectProductList);

  const handleLoadMore = () => {
    let queryRequest = generateQuery(searchTerm, queryState);
    dispatch(fetchProductList({
      url: `/gfashion/v1/channelProducts/${queryRequest}`
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
    if (searchTerm) {
      let queryRequest = generateQuery(searchTerm, queryState);
      dispatch(fetchProductList({
        url: `/gfashion/v1/channelProducts/${queryRequest}`
      }));
    }
    // eslint-disable-next-line
  }, [searchTerm]);

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
            <Grid container spacing={3} justify="center" className={classes.header}>
              <Grid item xs={3}>
                <h2 className={classes.searchTitle}>搜索结果</h2>
              </Grid>
              <Grid item xs={9} className={classes.productHeader}>
                "家具"相关 {productListResult.detail ? productListResult.detail.total_count : 0}个结果
              </Grid>
            </Grid>
            <Grid container spacing={3} justify="center" className={classes.content}>
              <Grid item xs={3}>
                <Filter />
              </Grid>
              <Grid item xs={9}>
                <div className={classes.contentTitle}>设计师(4)</div>
                <div className={classes.designerGrid}>
                  <DesignerCard />
                  <DesignerCard />
                  <DesignerCard />
                  <DesignerCard />
                </div>
                <Divider className={classes.contentTitle} />
                <div className={classes.contentTitle}>品牌(4)</div>
                <div className={classes.brandGrid}>
                  <BrandCard />
                  <BrandCard />
                  <BrandCard />
                  <BrandCard />
                  <BrandCard />
                </div>
                <Divider className={classes.contentTitle} />
                <div className={classes.contentTitle}>商品({productListResult.detail ? productListResult.detail.total_count : 0})</div>
                <ProductGrid products={productArray} />
                {
                  (productListResult.detail?.total_count! > productListResult.detail?.search_criteria.page_size! * (productListResult.detail?.search_criteria.current_page! + 1)) &&
                  <button className={classes.loadMore} onClick={handleLoadMore}>Load more</button>
                }
              </Grid>
            </Grid>
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

export default GFashionSearchListing
