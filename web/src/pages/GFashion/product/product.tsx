import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { selectProduct, fetchProductDetail } from '../../../app/slices/productsSlice';
import MainFrame from '../../../components/MainFrame';
import ProductImageCarousel from '../../../components/Product/productImageCarousel';
import ProductPanel from '../../../components/Product/productPanel';
import ProductRecommendation from '../../../components/Product/productRecommendation';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: "40px",
      paddingBottom: "60px"
    },
    description: {
      backgroundColor: '#F0F0F0',
      color: '#7F7F7F',
      padding: '20px 40px',
    },
    row: {
      marginTop: '40px'
    },
  }),
);

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let product = useSelector(selectProduct);

  useEffect(() => {
    dispatch(fetchProductDetail({
      url: '/product' // local mock data
      // url: '/gfashion/productdetail/24-MB04'
    }))
  }, [dispatch]);

  return (
    <MainFrame>
      {!product.isLoading && (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <ProductImageCarousel />
            </Grid>
            <Grid item xs={12} md={5}>
              <ProductPanel />
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.row}>
            <Grid item xs={12}>
              <div className={classes.description} dangerouslySetInnerHTML={{ __html: product.detail?.description! }}>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.row}>
            <Grid item xs={12}>
              <ProductRecommendation />
            </Grid>
          </Grid>
        </div>
      )}
    </MainFrame>
  )
}
