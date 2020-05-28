import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '30px',
      width: '300px',
      '& div': {
        marginBottom: theme.spacing(1)
      }
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '310px',
      width: '310px',
    },
    image: {
      maxHeight: '300px',
      maxWidth: '300px',
      margin: 'auto'
    },
    title: {
      fontSize: '18px',
      margin: '20px 0 10px',
      textAlign: 'center'
    },
    price: {
      fontSize: '18px',
      textAlign: 'center'
    }
  }),
);

const ProductCard = ({ product }: { product: any }) => {
  const classes = useStyles();

  return (
    product &&
    (
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <img
            src={product.file ? 'https://www.gfashion2020.tk/media/catalog/product' + product.file : ''}
            alt={product.name}
            className={classes.image}>
          </img>
        </div>
        <h2 className={classes.title}>{product.name}</h2>
        <div className={classes.price}>${product.price}</div>
      </div>
    )
  )
}

export default ProductCard;
