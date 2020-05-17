import React from 'react';
import MainFrame from '../../components/MainFrame';
import Slogan from './slogan';
import { DesignerCarousel } from './designerCarousel';
import GclubGate from './gclubGate';
import { Brands } from './brands';
import { Designer, Brand } from './types';

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

const brands: Array<Brand> = [
  {
    name: 'HERMES'
  },
  {
    name: 'LV'
  },
  {
    name: 'GUCCI'
  },
  {
    name: 'ARMANI'
  }
]

export default () => {

  return (
    <MainFrame>
      <GclubGate />
      <Slogan />
      <DesignerCarousel designers={designers} />
      <Brands brands={brands}></Brands>
    </MainFrame>
  )
}
