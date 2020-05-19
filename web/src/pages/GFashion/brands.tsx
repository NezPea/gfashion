import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, GridList, GridListTile } from '@material-ui/core';
import { BrandsProps } from '../../app/types';

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
    tile: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.palette.background.default,
      margin: '0 15px',
      '& div': {
        display: 'flex',
        alignItems: 'center'
      }
    }
  }),
);

export const Brands: React.FunctionComponent<BrandsProps> = ({ brands = [] }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h3' align='center'>潮流品牌</Typography>
        </Grid>
        <GridList className={classes.gridList} cols={4}>
          {
            brands.map((b, i) => {
              return (
                <GridListTile key={i} className={classes.tile}>
                  <Typography variant='subtitle1'>{b.name}</Typography>
                </GridListTile>
              )
            })
          }
        </GridList>
      </Grid>
    </Grid>
  )
}
