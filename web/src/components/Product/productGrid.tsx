import React from 'react';
import { ProductDetail } from '../../app/types';
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

const ProductGrid = ({ products }: {products: ProductDetail[]}) => {
  const classes = useStyles();

  return (
    (products.length) ?
      (
        <div className={classes.root}>
          {
            products.map((item, index) => (
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
