import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box, Button } from '@material-ui/core';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Avatar from '@material-ui/core/Avatar';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { DesignersProps } from '../../../app/types';
import { useTranslation } from 'react-i18next';
import { I18N, I18N_NS } from '../_i18n';

import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.down("xl")]: {
        padding: theme.spacing(20, 0),
        height: 825
      },
      [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(16, 0),
        height: 680
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(12, 0),
        height: 580
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
      position: 'relative',
      padding: theme.spacing(8, 0)
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
      width: '100%',
      height: '100%',
      marginBottom: theme.spacing(2),
      overflow: 'visible',
      filter: `grayscale(100%)`
    },
    slideButton: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      backgroundColor: theme.palette.common.white,
      border: '1px solid #e4e4e4',
      outline: 'none',
      '&.prev': {
        marginTop: theme.spacing(5),
        marginLeft: 'calc(50% - 64px)'
      },
      '&.next': {
        marginLeft: theme.spacing(6)
      }
    },
    slideBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      zIndex: 2,
      '& .designer-info': {
        visibility: 'hidden',
        position: 'absolute',
        color: theme.palette.common.white,
        textAlign: 'center',
        '& .designer-name': {
          fontFamily: `Montserrat`,
          fontSize: '1.75rem',
          fontWeight: `bold`
        },
        '& .designer-brand': {
          fontFamily: `Helvetica`,
          fontSize: `1.125rem`
        }
      },
      '& .action-follow': {
        visibility: 'hidden',
        position: 'absolute',
        bottom: 0,
        height: '13%',
        width: '100%',
        fontSize: 12,
        padding: 0,
        borderRadius: 0
      },
      '&:hover': {
        zIndex: 3,
        transform: `scale(1.25, 1.25)`
      },
      '&:hover .designer-info': {
        visibility: 'visible',
        cursor: `default`
      },
      '&:hover .action-follow': {
        visibility: 'visible',
      },
      '&:hover .avatar': {
        filter: `none`
      }
    }
  }),
);

export const DesignerCarousel: React.FunctionComponent<DesignersProps> = ({ designers = [] }) => {
  const classes = useStyles();
  const { t } = useTranslation(I18N_NS);

  const buildSlides = () => {
    return designers.map((m, i) => {
      return (
        <Slide key={i} index={i} className={classes.slide}>
          <Box className={classes.slideBox}>
            <Avatar src={require(`../../../assets/images/designer${i % 6 + 1}.png`)} variant='rounded' className={`${classes.avatar} avatar`} />
            <div className='designer-info'>
              <Typography className='designer-name'>{m.name}</Typography>
              <Typography className='designer-brand'>{m.cooperatingBrands[0]}</Typography>
            </div>
            <Button variant='contained' color='secondary' className='action-follow'>Follow</Button>
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
          {t(I18N.home.recommendedDesigners.title)}
        </Typography>
        <div className={classes.surroundingLine}></div>
      </div>
      <Typography className={classes.sectionDescription}>{t(I18N.home.recommendedDesigners.description)}</Typography>
      <CarouselProvider
        naturalSlideWidth={320}
        naturalSlideHeight={320}
        totalSlides={designers ? designers.length : 5}
        visibleSlides={6}
        orientation="horizontal"
        className={classes.carouselProvider}
      >
        <Slider style={{ overflow: 'visible' }}>
          {buildSlides()}
        </Slider>
        <ButtonBack className={`${classes.slideButton} prev`}><ChevronLeft /></ButtonBack>
        <ButtonNext className={`${classes.slideButton} next`}><ChevronRight /></ButtonNext>
      </CarouselProvider>
    </div >
  )
}
