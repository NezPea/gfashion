import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 300
    },
    gateBox: {
      border: '1px solid #ccc',
      backgroundColor: theme.palette.background.paper,
      width: 250,
      height: 80,
      margin: '0 15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }),
);

export default () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Grid container spacing={3} direction='column' justify='space-around'>
        <Grid item xs={12}>
          <Typography variant='h2' align='center'>Gclub</Typography>
        </Grid>
        <Grid container direction='row' alignItems='center' justify='center'>
          <Grid className={classes.gateBox}>
            <Typography variant='h6' align='center'>喜马拉雅币</Typography>
          </Grid>
          <Grid className={classes.gateBox}>
            <Typography variant='h6' align='center'>G-dollar</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
