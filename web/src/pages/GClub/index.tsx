import React, { useEffect } from 'react';
//redex
import { useSelector, useDispatch } from 'react-redux';
import { selectGclub, fetchGclubData } from '../../app/slices/gclubSlice'

//components
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core'
import GClubFrame from '../../components/MainFrame/GClubFrame';
import Banner from './banner'
import Stories from './stories'
import Farm from './farm'
import Joinus from './joinus'
import LoadingSpinner from '../../components/Common/loadingSpinner';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({

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
        <Container >
          <Banner></Banner>
          <Stories></Stories>
          <Farm></Farm>
          <Joinus></Joinus>
        </Container>}
    </GClubFrame>
  )
}
