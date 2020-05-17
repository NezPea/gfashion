import React from 'react';
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MainFrame from '../../components/MainFrame';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    link: {
      margin: theme.spacing(1)
    }
  }),
);

export default () => {
  const classes = useStyles()

  return (
    <MainFrame>
      <div className={classes.root}>
        <h1>GMall page</h1>
        <Link to='/' className={classes.link}>go to home</Link>
      </div>
    </MainFrame>
  )
}
