import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, GridList, GridListTile, Typography } from '@material-ui/core';
import { RecommendedProductProps } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.background.paper
    },
    products: {
      width: '48%'
    },
    productsFeatured: {
      width: '48%'
    },
    tileContent: {
      backgroundColor: theme.palette.background.default,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }),
);

export const RecommendedProducts: React.FunctionComponent<RecommendedProductProps> = ({ products = [] }) => {
  const classes = useStyles();
  const featuredProducts = products.filter(p => p.isFeatured);
  const otherProducts = products.filter(p => !p.isFeatured)

  return (
    <Grid item className={classes.root}>
      <Grid container spacing={3}>
        <Grid xs={12} alignContent='center' alignItems='center'>
          <Typography variant='h3' align='center'>时尚品鉴</Typography>
        </Grid>
        <Grid container spacing={2} alignItems='stretch' justify="space-around">
          <GridList cols={1} cellHeight={400} className={classes.productsFeatured}>
            {
              featuredProducts.map((fp) => {
                return (
                  <GridListTile>
                    <div className={classes.tileContent}>
                      <Typography>{fp.name}</Typography>
                    </div>
                  </GridListTile>
                )
              })
            }
          </GridList>
          <GridList cols={2} cellHeight={200} className={classes.products}>
            {
              otherProducts.map((op) => {
                return (
                  <GridListTile>
                    <div className={classes.tileContent}>
                      <Typography>{op.name}</Typography>
                    </div>
                  </GridListTile>
                )
              })
            }
          </GridList>
        </Grid>
      </Grid>
    </Grid>
  )
}
