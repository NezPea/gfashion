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
        marginBottom: '10px'
      }
    },
    image: {
      height: '280px',
      width: '280px',
      backgroundColor: theme.palette.action.disabledBackground,
    },
    title: {
      fontSize: '18px',
      margin: '30px 0 10px',
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
        <img
          src={product.media_gallery_entries ? product.media_gallery_entries[0].file : ''}
          alt={product.name}
          className={classes.image}>
        </img>
        <h2 className={classes.title}>{product.name}</h2>
        <div>${product.price}</div>
      </div>
    )
  )
}

export default ProductCard;
