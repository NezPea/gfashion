import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, GridList } from '@material-ui/core';
import { Brand, BrandsProps } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
      width: '100%'
    },
    gridItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.background.default,
      margin: '0 15px'
    }
  }),
);

const buildBrands = (brands: Array<Brand>, classes: any) => {
  return brands.map((b) => {
    return (
      <Grid item sm={3} className={classes.gridItem}>
        <Typography variant='subtitle1'>{b.name}</Typography>
      </Grid>
    )
  })
}

export const Brands: React.FunctionComponent<BrandsProps> = ({ brands = [] }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Grid container spacing={3}>
        <Grid xs={12} alignContent='center' alignItems='center'>
          <Typography variant='h3' align='center'>潮流品牌</Typography>
        </Grid>
        <GridList className={classes.gridList}>
          {buildBrands(brands, classes)}
        </GridList>
      </Grid>
    </Grid>
  )
}
