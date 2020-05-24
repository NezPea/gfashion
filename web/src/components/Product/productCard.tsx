import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '40px',
      width: '280px',
      '& div': {
        marginBottom: theme.spacing(1)
      }
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '280px',
      width: '280px',
    },
    image: {
      maxHeight: '280px',
      maxWidth: '280px',
      margin: 'auto'
    },
    title: {
      fontSize: '18px',
      margin: '30px 0 10px',
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
