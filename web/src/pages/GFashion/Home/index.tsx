import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import MainFrame from '../../../components/MainFrame'
import { DesignerCarousel } from './designerCarousel'
import GclubGate from './gclubGate'
import { Brands } from './brands'
import { RecommendedProducts } from './recommendedProducts'
import {
  selectHomeRecommendations,
  fetchHomeRecommendations
} from '../../../app/slices/homeRecommendationsSlice'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { I18N, I18N_NS } from './_i18n'

export default () => {
  const home = useSelector(selectHomeRecommendations)
  const dispatch = useDispatch()
  const { t } = useTranslation(I18N_NS)

  useEffect(() => {
    dispatch(
      fetchHomeRecommendations({
        url: '/homepage'
      })
    )
  }, [dispatch])

  return (
    <MainFrame>
      <Helmet>
        <title>{t(I18N.home._self)}</title>
      </Helmet>
      {home.isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <React.Fragment>
          <GclubGate />
          <DesignerCarousel
            designers={home.recommendations?.recommendedDesigners}
          />
          <Brands brands={home.recommendations?.recommendedBrands}></Brands>
          <RecommendedProducts
            products={home.recommendations?.recommendedProducts}
          />
        </React.Fragment>
      )}
    </MainFrame>
  )
}
