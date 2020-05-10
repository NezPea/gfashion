import React from 'react';
import Button from '@material-ui/core/Button';
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
  const classes =  useStyles()

  return (
    <MainFrame>
      <div className={classes.root}>
        <h1>Home page111</h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Link to='/login' className={classes.link}>login</Link>
      </div>
    </MainFrame>
  )
}
