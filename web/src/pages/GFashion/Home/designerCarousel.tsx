import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Avatar from '@material-ui/core/Avatar';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { DesignersProps } from '../../../app/types';

import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.up("xl")]: {
        padding: theme.spacing(20, 0)
      },
      [theme.breakpoints.up("lg")]: {
        padding: theme.spacing(16, 0)
      },
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(12, 0)
      }
    },
    headline: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    surroundingLine: {
      height: 0,
      width: 50,
      border: '1px solid #000'
    },
    sectionTitle: {
      ...theme.typography.homeSectionTitle,
      margin: theme.spacing(0, 5)
    },
    sectionDescription: {
      ...theme.typography.homeSectionDescription,
      textAlign: 'center'
    },
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
            <Avatar src={m.photoUrl} className={classes.avatar} />
            <Typography>{m.name}</Typography>
          </Box>
        </Slide>
      )
    })
  }

  return (
    <div className={classes.root}>
      <div className={classes.headline}>
        <div className={classes.surroundingLine}></div>
        <Typography className={classes.sectionTitle} align='center'>
          Genius DESIGNERS
        </Typography>
        <div className={classes.surroundingLine}></div>
      </div>
      <Typography className={classes.sectionDescription}>Something details something details something details</Typography>
      <CarouselProvider
        naturalSlideWidth={125}
        naturalSlideHeight={160}
        totalSlides={designers ? designers.length : 5}
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
    </div >
  )
}
