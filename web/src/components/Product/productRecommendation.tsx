import React from 'react';
import { useSelector } from 'react-redux';
import { selectProduct } from '../../app/slices/productsSlice';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import LoadingFailed from '../../components/Common/loadingFailed';
import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginTop: 0
    },
    slider: {
      width: '100%'
    },
    carousel: {
      display: 'flex',
      width: '100%',
      position: 'relative'
    },
    slide: {
      backgroundColor: theme.palette.action.disabledBackground,
      width: 'calc(100% - 20px)',
      marginRight: '20px',
    },
    slidePrev: {
      position: 'absolute',
      top: 'calc(50% - 8px)'
    },
    slideNext: {
      position: 'absolute',
      top: 'calc(50% - 8px)',
      right: 0
    }
  }),
);

const ProductRecommendation = () => {
  const classes = useStyles();
  let product = useSelector(selectProduct);

  const buildSlides = () => {
    return product.detail?.product_links.map((m, i) => {
      return (
        <Slide key={i} index={i}>
          <Image src={'https://www.gfashion2020.tk/media/catalog/product' + m.file} alt={m.name} hasMasterSpinner={true} className={classes.slide} />
        </Slide>
      )
    })
  }

  return (
    (product.detail && product.detail?.media_gallery_entries && product.detail?.media_gallery_entries.length) ?
      (
        <div>
          <h2 className={classes.title}>相关推荐</h2>
          <CarouselProvider
            naturalSlideWidth={450}
            naturalSlideHeight={350}
            totalSlides={product.detail?.product_links.length!}
            visibleSlides={4}
            infinite={true}
            className={classes.carousel}
          >
            <Slider className={classes.slider}>
              {buildSlides()}
            </Slider>
            <ButtonBack className={classes.slidePrev}>prev</ButtonBack>
            <ButtonNext className={classes.slideNext}>next</ButtonNext>
          </CarouselProvider>
        </div>
      ) : (
        <LoadingFailed />
      )
  )
}

export default ProductRecommendation;
