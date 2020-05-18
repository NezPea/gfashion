import React from 'react';
import { Container } from '@material-ui/core'
import MainFrame from '../../components/MainFrame';
import Banner from './banner'
import Stories from './stories'
import Farm from './farm'
import Joinus from './joinus'

export default () => {

  return (
    <MainFrame >
      <Container >
        <Banner></Banner>
        <Stories></Stories>
        <Farm></Farm>
        <Joinus></Joinus>
      </Container>
    </MainFrame>
  )
}
