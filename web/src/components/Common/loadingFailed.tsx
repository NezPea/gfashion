import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.action.disabledBackground,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }
  })
);

const LoadingFailed = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}></div>
  );
}

export default LoadingFailed
