import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MainFrameFullWidth from '../../../components/MainFrame';
import ProductGrid from '../../../components/Product/productGrid';
// import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(7)
    },
    banner: {
      backgroundColor: theme.palette.warning.light,
      width: 'calc(100vw - (100vw - 100%))',
      height: '300px',
      position: 'absolute',
      left: 0,
      marginTop: '-22px'
    },
    content: {
      marginTop: '300px'
    },
    description: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      padding: '20px 40px',
    },
    row: {
      marginTop: theme.spacing(5)
    },
  }),
);

const GFashionProductListing = () => {
  const classes = useStyles();

  return (
    <MainFrameFullWidth>
      <div className={classes.root}>
        <div className={classes.banner}></div>
        <Grid container spacing={3} className={classes.content}>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={9}>
            <ProductGrid />
          </Grid>
        </Grid>
      </div>
    </MainFrameFullWidth>
  )
}

export default GFashionProductListing
