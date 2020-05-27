import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '130px',
      '& div': {
        marginBottom: '30px',
      }
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '130px',
      width: '130px',
    },
    image: {
      borderRadius: '75px',
      maxHeight: '130px',
      maxWidth: '130px',
      margin: 'auto'
    },
    title: {
      fontSize: '18px',
      margin: '0',
      textAlign: 'center'
    },
    country: {
      color: theme.palette.text.secondary,
      fontSize: '15px',
      textAlign: 'center'
    }
  }),
);

const brand = {
  name: "HERMES",
  country: "France",
  file: "http://via.placeholder.com/130x130"
};

const BrandCard = () => {
  const classes = useStyles();

  return (
    brand &&
    (
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <img
            src={brand.file}
            alt={brand.name}
            className={classes.image}>
          </img>
        </div>
        <h2 className={classes.title}>{brand.name}</h2>
        <div className={classes.country}>{brand.country}</div>
      </div>
    )
  )
}

export default BrandCard;
