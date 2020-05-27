import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import MainFrame from '../../../components/MainFrame';
import { DesignerCarousel } from './designerCarousel';
import GclubGate from './gclubGate';
import { Brands } from './brands';
import { RecommendedProducts } from './recommendedProducts';
import { selectHomeRecommendations, fetchHomeRecommendations } from '../../../app/slices/homeRecommendationsSlice';

export default () => {
  const home = useSelector(selectHomeRecommendations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeRecommendations({
      url: '/gfashion/v1/homepage'
    }))
  }, [dispatch])

  return (
    <MainFrame>
      {
        home.isLoading ? <CircularProgress color="secondary" /> :
          <React.Fragment>
            <GclubGate />
            <DesignerCarousel designers={home.recommendations?.recommendedDesigners} />
            <Brands brands={home.recommendations?.recommendedBrands}></Brands>
            <RecommendedProducts products={home.recommendations?.recommendedProducts} />
          </React.Fragment>
      }
    </MainFrame>
  )
}
