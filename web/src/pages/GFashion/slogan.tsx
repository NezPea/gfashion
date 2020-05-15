import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.primary[theme.palette.type],
      height: 300,
      minWidth: 800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
  }),
);

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid alignContent='center' alignItems='center'>
          <Paper className={classes.paper}>Gfashion slogan</Paper>
        </Grid>
      </Grid>
    </div>
  )
}
