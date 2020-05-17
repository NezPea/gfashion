import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

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
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.primary[theme.palette.type],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
  }),
);

export default () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h5' align='center'>Gfashion宣传图片</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
