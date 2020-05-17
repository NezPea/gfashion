import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CarouselProvider, Slider, Slide, ImageWithZoom, Dot, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ProductImageList } from '../../app/types';
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
      maxWidth: '80px',
      maxHeight: '60px'
    },
    slider: {
      width: 'calc(100% - 110px)'
    },
    carousel: {
      display: 'flex',
      width: '100%',
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

const ProductImageCarousel: React.FunctionComponent<ProductImageList> = ({ images = [] }) => {
  const classes = useStyles();

  const buildPreview = () => {
    return images.map((m, i) => {
      return (
        <Dot slide={i}>
          <img src={m.url} className={classes.thumbnail} />
        </Dot>
      )
    })
  }

  const buildSlides = () => {
    return images.map((m, i) => {
      return (
        <Slide key={i} index={i}>
          <ImageWithZoom src={m.url} />
        </Slide>
      )
    })
  }

  return (
    <CarouselProvider
      naturalSlideWidth={450}
      naturalSlideHeight={350}
      totalSlides={images.length}
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
  )
}

export default ProductImageCarousel;
