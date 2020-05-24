import React, { useEffect } from 'react';
//redex
import { useSelector, useDispatch } from 'react-redux';
import { selectGclub, fetchGclubData } from '../../app/slices/gclubSlice'

//components
import { Container, CircularProgress } from '@material-ui/core'
import MainFrame from '../../components/MainFrame';
import Banner from './banner'
import Stories from './stories'
import Farm from './farm'
import Joinus from './joinus'

export default () => {
  const gclub = useSelector(selectGclub)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGclubData({
      url: ""
    }))
  }, [dispatch])

  return (
    < MainFrame >
      {gclub.isLoading ? <CircularProgress color="secondary" /> :
        <Container >
          <Banner></Banner>
          <Stories></Stories>
          <Farm></Farm>
          <Joinus></Joinus>
        </Container>}
    </MainFrame >
  )
}
