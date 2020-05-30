import React, { useEffect } from 'react';
//redex
import { useSelector, useDispatch } from 'react-redux';
import { selectGclub, fetchGclubData } from '../../app/slices/gclubSlice'

//components
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core'
import GClubFrame from '../../components/MainFrame/GClubFrame';
import LoadingSpinner from '../../components/Common/loadingSpinner';

import Banner from './home/section/banner'
import Stories from './home/section/stories'
import Farm from './home/section/farm'
import Joinus from './home/section/joinus'


import Community from './home/community'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    spinner: {
      display: 'inline-block',
      margin: `${theme.spacing(10)}px auto`,
      position: 'relative',
      left: 'calc(50% - 50px)'
    },
  })

);
export default () => {
  const classes = useStyles();
  const gclub = useSelector(selectGclub)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGclubData({
      url: ""
    }))
  }, [dispatch])

  return (
    <GClubFrame>
      {gclub.isLoading ? <div className={classes.spinner}>
        <LoadingSpinner />
      </div> :
        <div>
          <Grid container className={classes.root} >
            <Grid item xs={9}>
              <Banner></Banner>
              <Stories></Stories>
              <Farm></Farm>
              <Joinus></Joinus>
            </Grid>
            <Grid item xs={3}>
              <Community />
            </Grid>
          </Grid>
        </div>}
    </GClubFrame>
  )
}
