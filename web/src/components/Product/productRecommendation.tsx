import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const recommendations = [
  {
    url: 'https://via.placeholder.com/400x400',
    title: '商品标题',
    price: 500,
    currency: '$'
  },
  {
    url: 'https://via.placeholder.com/400x400',
    title: '商品标题',
    price: 500,
    currency: '$'
  },
  {
    url: 'https://via.placeholder.com/400x400',
    title: '商品标题',
    price: 500,
    currency: '$'
  },
  {
    url: 'https://via.placeholder.com/400x400',
    title: '商品标题',
    price: 500,
    currency: '$'
  },
  {
    url: 'https://via.placeholder.com/400x400',
    title: '商品标题',
    price: 500,
    currency: '$'
  },
  {
    url: 'https://via.placeholder.com/400x400',
    title: '商品标题',
    price: 500,
    currency: '$'
  },
]

const useStyles = makeStyles(() =>
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
      padding: '0 20px',
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

  const buildSlides = () => {
    return recommendations.map((m, i) => {
      return (
        <Slide key={i} index={i}>
          <Image src={m.url} hasMasterSpinner={true} className={classes.slide}/>
        </Slide>
      )
    })
  }

  return (
    <div>
      <h2 className={classes.title}>相关推荐</h2>
      <CarouselProvider
        naturalSlideWidth={450}
        naturalSlideHeight={350}
        totalSlides={recommendations.length}
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
  )
}

export default ProductRecommendation;
