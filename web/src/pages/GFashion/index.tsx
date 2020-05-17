import React from 'react';
import MainFrame from '../../components/MainFrame';
import Slogan from './slogan';
import { DesignerCarousel } from './designerCarousel';
import GclubGate from './gclubGate';
import { Brands } from './brands';
import { RecommendedProducts } from './recommendedProducts';
import { Designer, Brand, RecommendedProduct } from './types';

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

const products: Array<RecommendedProduct> = [
  {
    name: 'Ladymay',
    isFeatured: true
  },
  {
    name: 'Air Force One',
    isFeatured: false,
  },
  {
    name: 'Tiger Skin',
    isFeatured: false
  },
  {
    name: 'Shark Skin',
    isFeatured: false
  },
  {
    name: 'Cullian',
    isFeatured: false
  }
]

export default () => {

  return (
    <MainFrame>
      <GclubGate />
      <Slogan />
      <DesignerCarousel designers={designers} />
      <Brands brands={brands}></Brands>
      <RecommendedProducts products={products} />
    </MainFrame>
  )
}
