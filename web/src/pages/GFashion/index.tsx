import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MainFrame from '../../components/MainFrame';
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
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const classes =  useStyles();
  const recommendations = useSelector(selectRecommendations);
  const dispatch = useDispatch();

  useEffect(() => {
      if (!isDataLoaded) {
        dispatch(fetchRecommendations())
        setIsDataLoaded(true)
      }
  }, [isDataLoaded])

  return (
    <MainFrame>
      <div className={classes.root}>
        <h1>Gfashion page</h1>
        <Link to='/' className={classes.link}>go to home</Link>
      </div>
    </MainFrame>
  )
}
