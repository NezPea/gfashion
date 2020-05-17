import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Avatar from '@material-ui/core/Avatar';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { DesignersProps } from './types';

import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carouselProvider: {
      width: '100%',
      height: '300px',
      position: 'relative',
      padding: '0 30px'
    },
    slide: {
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    avatar: {
      width: theme.spacing(14),
      height: theme.spacing(14),
      marginBottom: theme.spacing(2)
    },
    slideButton: {
      borderRadius: 20,
      width: theme.spacing(5),
      height: theme.spacing(5),
      position: 'absolute',
      marginTop: '-30px',
      top: '50%',
      outline: 'none',
      '&.prev': {
        left: 0
      },
      '&.next': {
        right: 0
      }
    },
    slideBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '90%',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    }
  }),
);

export const DesignerCarousel: React.FunctionComponent<DesignersProps> = ({ designers = [] }) => {
  const classes = useStyles();

  const buildSlides = () => {
    return designers.map((m, i) => {
      return (
        <Slide key={i} index={i} className={classes.slide}>
          <Box className={classes.slideBox}>
            <Avatar src={m.avatar} className={classes.avatar} />
            <Typography>{m.name}</Typography>
          </Box>
        </Slide>
      )
    })
  }

  return (
    <Grid item>
      <Typography variant="h2" component="h2" align='center'>
        魅力设计师
      </Typography>
      <CarouselProvider
        naturalSlideWidth={125}
        naturalSlideHeight={160}
        totalSlides={designers.length}
        visibleSlides={5}
        orientation="horizontal"
        className={classes.carouselProvider}
      >
        <Slider>
          {buildSlides()}
        </Slider>
        <ButtonBack className={`${classes.slideButton} prev`}><ChevronLeft /></ButtonBack>
        <ButtonNext className={`${classes.slideButton} next`}><ChevronRight /></ButtonNext>
      </CarouselProvider>
    </Grid >
  )
}
