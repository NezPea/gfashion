import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ProductCard from './productCard';
import LoadingFailed from '../Common/loadingFailed';

const productList = [{
  sku: "sku",
  name: "Product Name",
  image: "https://via.placeholder.com/280x280",
  price: "2,500",
  currency: "$",
  shopName: "Shop Name"
}, {
  sku: "sku",
  name: "Product Name",
  image: "https://via.placeholder.com/280x280",
  price: "2,500",
  currency: "$",
  shopName: "Shop Name"
}, {
  sku: "sku",
  name: "Product Name",
  image: "https://via.placeholder.com/280x280",
  price: "2,500",
  currency: "$",
  shopName: "Shop Name"
}, {
  sku: "sku",
  name: "Product Name",
  image: "https://via.placeholder.com/280x280",
  price: "2,500",
  currency: "$",
  shopName: "Shop Name"
}, {
  sku: "sku",
  name: "Product Name",
  image: "https://via.placeholder.com/280x280",
  price: "2,500",
  currency: "$",
  shopName: "Shop Name"
}, {
  sku: "sku",
  name: "Product Name",
  image: "https://via.placeholder.com/280x280",
  price: "2,500",
  currency: "$",
  shopName: "Shop Name"
}]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    test: {
      backgroundColor: theme.palette.background.paper,
    }
  }),
);

const ProductGrid = () => {
  const classes = useStyles();

  return (
    (productList && productList.length) ?
      (
        <div className={classes.root}>
          {
            productList.map((item, index) => (
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
