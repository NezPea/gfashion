import React from 'react'
import { useSelector } from 'react-redux'
import { selectProduct } from '../../app/slices/productsSlice'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import LoadingFailed from '../../components/Common/loadingFailed'
import 'pure-react-carousel/dist/react-carousel.es.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: '0 auto 56px',
      textAlign: 'center',
      fontSize: '20px'
    },
    slider: {
      width: '100%'
    },
    carousel: {
      display: 'flex',
      width: '100%',
      position: 'relative'
      // '& .carousel__inner-slide': {
      //   display: 'flex',
      //   alignItems: 'center',
      //   flexFlow: 'column'
      // }
    },
    cell: {
      display: 'flex',
      alignItems: 'center',
      flexFlow: 'column',
      width: 'calc(100% - 20px)',
      margin: '0 auto'
    },
    image: {
      marginBottom: '38px',
      width: '100%',
      paddingBottom: '100%'
    },
    desc: {
      marginBottom: '24px',
      fontSize: '18px'
    },
    slide: {
      backgroundColor: theme.palette.action.disabledBackground,
      maxWidth: 'calc(100% - 20px)',
      marginRight: '20px'
      // height: 'auto'
    }
    // slidePrev: {
    //   position: 'absolute',
    //   top: 'calc(50% - 8px)'
    // },
    // slideNext: {
    //   position: 'absolute',
    //   top: 'calc(50% - 8px)',
    //   right: 0
    // }
  })
)

const productFallback = {
  currency: '$'
}

const ProductRecommendation = () => {
  const classes = useStyles()
  let product = useSelector(selectProduct)

  const buildSlides = () => {
    return product.detail?.product_links.map((m, i) => {
      return (
        <Slide key={i} index={i}>
          <div className={classes.cell}>
            <div
              className={classes.image}
              style={{
                backgroundImage: `url(${m.file})`,
                backgroundSize: 'cover'
              }}></div>
            {/* <Image src={m.file} alt={m.name} hasMasterSpinner={true} className={classes.slide} /> */}
            <span className={classes.desc}>{m.name}</span>
            <span className={classes.desc}>
              {productFallback.currency}
              {m.price}
            </span>
          </div>
        </Slide>
      )
    })
  }

  return product.detail &&
    product.detail?.media_gallery_entries &&
    product.detail?.media_gallery_entries.length ? (
    <div>
      <h2 className={classes.title}>你可能会喜欢...</h2>
      <CarouselProvider
        naturalSlideWidth={312}
        naturalSlideHeight={412}
        totalSlides={product.detail?.product_links.length!}
        visibleSlides={4}
        infinite={true}
        className={classes.carousel}>
        <Slider className={classes.slider}>{buildSlides()}</Slider>
        {/* <ButtonBack className={classes.slidePrev}>prev</ButtonBack>
            <ButtonNext className={classes.slideNext}>next</ButtonNext> */}
      </CarouselProvider>
    </div>
  ) : (
    <LoadingFailed />
  )
}

export default ProductRecommendation
