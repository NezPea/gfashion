import React from 'react';
import MainFrame from '../../components/MainFrame';
import Slogan from './slogan';
import { DesignerCarousel } from './designerCarousel';

interface Designer {
  name: string;
  avatar: string;
}

const designers: Array<Designer> = [
  {
    name: 'Miles',
    avatar: ''
  },
  {
    name: 'Luther',
    avatar: ''
  },
  {
    name: 'Pence',
    avatar: ''
  },
  {
    name: 'Ivanka',
    avatar: ''
  },
  {
    name: 'Trump',
    avatar: ''
  },
  {
    name: 'Miles2',
    avatar: ''
  },
  {
    name: 'Luther2',
    avatar: ''
  },
  {
    name: 'Pence2',
    avatar: ''
  },
  {
    name: 'Ivanka2',
    avatar: ''
  },
  {
    name: 'Trump2',
    avatar: ''
  }
]

export default () => {

  return (
    <MainFrame>
      <Slogan></Slogan>
      <DesignerCarousel designers={designers} />
    </MainFrame>
  )
}
