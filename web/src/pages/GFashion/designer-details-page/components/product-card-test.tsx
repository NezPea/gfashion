//copy and modify code for ui test

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '312px',
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '2.375rem',
      height: '312px',
      width: '312px',
    },
    image: {
      maxHeight: '300px',
      maxWidth: '300px',
      margin: 'auto'
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      textAlign: 'center',
      color: '#222222',
      marginBottom: '1.313rem'
    },
    oneLineDescription: {
      fontSize: '18px',
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1',
      letterSpacing: 'normal',
      textAlign: 'center',
      color: '#888888',
      marginBottom: '1.625rem'
    },
    price: {
      fontSize: '18px',
      fontFamily: 'Roboto',
      textAlign: 'center',
      color: '#222222',
      marginBottom: '7.000rem'
    }
});

const ProductCardTest = ({ product }: { product: any }) => {
  const classes = useStyles();

  return (
    product &&
    (
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <img
            src={product.file}
            alt={product.name}
            className={classes.image}>
          </img>
        </div>
        <div className={classes.title}>{product.name}</div>
        <div className={classes.oneLineDescription}>{product.oneLineDescription}</div>
        <div className={classes.price}>${product.price}</div>
      </div>
    )
  )
}

export default ProductCardTest;
