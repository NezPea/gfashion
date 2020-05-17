import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MainFrame from '../../../components/MainFrame';
import ProductImageCarousel from '../../../components/Product/productImageCarousel';
import ProductPanel from '../../../components/Product/productPanel';
import ProductRecommendation from '../../../components/Product/productRecommendation';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: "40px"
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

  return (
    <MainFrame>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <ProductImageCarousel/>
          </Grid>
          <Grid item xs={12} md={5}>
            <ProductPanel/>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.row}>
          <Grid item xs={12}>
            <div className={classes.description}>
              此货品需要7-10个工作日进行配送。如遇缺货，***有权解除订单且无需为订单解除而承担任何法律责任。届时客服人员将联系您取消订单,并进行退款操作。您继续完成网上交易的行为将被视为您同意上述条款。
              <br />
              <br />
              <br />
              <br />
             </div> 
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.row}>
          <Grid item xs={12}>
            <ProductRecommendation />
          </Grid>
        </Grid>
      </div>
    </MainFrame>
  )
}
