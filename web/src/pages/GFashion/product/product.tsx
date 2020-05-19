import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { selectProduct, fetchProductDetail } from '../../../app/slices/productsSlice';
import MainFrame from '../../../components/MainFrame';
import ProductImageCarousel from '../../../components/Product/productImageCarousel';
import ProductPanel from '../../../components/Product/productPanel';
import ProductRecommendation from '../../../components/Product/productRecommendation';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(7)
    },
    description: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      padding: '20px 40px',
    },
    row: {
      marginTop: theme.spacing(5)
    },
  }),
);

const GFashionProduct = ({ match }: { match: any }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productId = match && match.params && match.params.productId;
  let product = useSelector(selectProduct);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail({
        //url: '/product' // local mock data
        url: `/gfashion/productdetail/${productId}`
      }));
    }
  }, [dispatch, productId]);

  return (
    <MainFrame>
      {
        !product.isLoading && (
          product.detail ? (
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                  <ProductImageCarousel />
                </Grid>
                <Grid item xs={12} md={5}>
                  <ProductPanel />
                </Grid>
              </Grid>
              {
                product.detail?.description &&
                <Grid container spacing={3} className={classes.row}>
                  <Grid item xs={12}>
                    <div className={classes.description} dangerouslySetInnerHTML={{ __html: product.detail?.description! }}></div>
                  </Grid>
                </Grid>
              }
              <Grid container spacing={3} className={classes.row}>
                <Grid item xs={12}>
                  <ProductRecommendation />
                </Grid>
              </Grid>
            </div>
          ) : 'Failed to load data'
        )
      }
    </MainFrame>
  )
}

export default GFashionProduct
