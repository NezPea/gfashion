import React from 'react';
import { useSelector } from 'react-redux';
import { selectProduct } from '../../app/slices/productsSlice';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CarouselProvider, Slider, Slide, ImageWithZoom, Dot, ButtonBack, ButtonNext } from 'pure-react-carousel';
import LoadingFailed from '../../components/Common/loadingFailed';
import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    thumbnailContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '110px',
      '& button': {
        border: 0,
        padding: 0,
        marginBottom: '20px',
        marginRight: '30px',
      }
    },
    thumbnail: {
      backgroundColor: theme.palette.action.disabledBackground,
      maxWidth: '80px',
      maxHeight: '60px'
    },
    slider: {
      width: 'calc(100% - 110px)'
    },
    image: {
      backgroundColor: theme.palette.action.disabledBackground,
    },
    carousel: {
      display: 'flex',
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    slidePrev: {
      position: 'absolute',
      top: 'calc(50% - 8px)',
      left: '110px'
    },
    slideNext: {
      position: 'absolute',
      top: 'calc(50% - 8px)',
      right: 0
    }
  }),
);

const ProductImageCarousel = () => {
  const classes = useStyles();
  let product = useSelector(selectProduct);

  const buildPreview = () => {
    return product.detail?.images.map((m, i) => {
      return (
        <Dot key={i} slide={i}>
          <img src={m.file} alt={m.label} className={classes.thumbnail} />
        </Dot>
      )
    })
  }

  const buildSlides = () => {
    return product.detail?.images.map((m, i) => {
      return (
        <Slide key={i} index={i}>
          <ImageWithZoom src={m.file} className={classes.image} />
        </Slide>
      )
    })
  }

  return (
    (product.detail && product.detail?.images && product.detail?.images.length) ?
      (
        <CarouselProvider
          naturalSlideWidth={450}
          naturalSlideHeight={350}
          totalSlides={product.detail?.images.length!}
          visibleSlides={1}
          infinite={true}
          className={classes.carousel}
        >
          <div className={classes.thumbnailContainer}>
            {buildPreview()}
          </div>
          <Slider className={classes.slider}>
            {buildSlides()}
          </Slider>
          <ButtonBack className={classes.slidePrev}>prev</ButtonBack>
          <ButtonNext className={classes.slideNext}>next</ButtonNext>
        </CarouselProvider>
      ) : (
        <LoadingFailed />
      )
  )
}

export default ProductImageCarousel;
