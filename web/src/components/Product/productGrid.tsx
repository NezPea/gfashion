import React from 'react';
import { useSelector } from 'react-redux';
import { selectProductList } from '../../app/slices/productListSlice';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ProductCard from './productCard';
import LoadingFailed from '../Common/loadingFailed';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gridGap: theme.spacing(2)
    }
  }),
);

const ProductGrid = () => {
  const classes = useStyles();
  let productList = useSelector(selectProductList);

  return (
    (productList.detail && productList.detail.items && productList.detail.items.length) ?
      (
        <div className={classes.root}>
          {
            productList.detail.items.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))
          }
        </div>
      ) : (
        <LoadingFailed />
      )
  )
}

export default ProductGrid;
