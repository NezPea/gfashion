import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MainFrame from '../../components/MainFrame';
import Slogan from './slogan';
import { selectRecommendations, fetchRecommendations } from '../../app/slices/recommendationsSlice';
import { useSelector, useDispatch } from 'react-redux';

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
  const classes = useStyles();

  return (
    <MainFrame>
      <div className={classes.root}>
        <Slogan></Slogan>
        <DesignerCarousel designers={designers} />
      </div>
    </MainFrame>
  )
}
