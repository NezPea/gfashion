import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Avatar, Button, Link } from '@material-ui/core';
import { BrandsProps } from '../../../app/types';
import { Slide, CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ChevronRight, ChevronLeft } from '@material-ui/icons';
import MockVideo from '../../../assets/images/mock_video.jpg';
import models from './models';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      margin: 'auto',
      [theme.breakpoints.down("xl")]: {
        padding: theme.spacing(20, 0),
        minHeight: 1046,
        width: 1404
      },
      [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(16, 0),
        minHeight: 800,
        width: 1200
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(12, 0),
        minHeight: 600,
        width: 800
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
      width: '132px',
      height: '132px',
      marginBottom: theme.spacing(2),
      overflow: 'hidden',
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
      backgroundColor: theme.palette.background.default,
      position: 'relative',
      zIndex: 2,
      '& .designer-info': {
        color: theme.palette.common.black,
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
        fontSize: 12,
        borderRadius: 0
      }
    },
    newLaunch: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('xl')]: {
        height: 400
      },
      [theme.breakpoints.down('lg')]: {
        height: 350
      },
      [theme.breakpoints.down('md')]: {
        height: 300
      },
      '& .text': {
        height: `100%`,
        width: `30%`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
      },
      '& img': {
        height: `100%`
      }
    },
    models: {
      width: `100%`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: theme.spacing(10),
      '& img': {
        width: '14%'
      }
    }
  }),
);

export const Brands: React.FunctionComponent<BrandsProps> = ({ brands = [] }) => {
  const classes = useStyles();

  const buildSlides = () => {
    return brands.map((b, i) => {
      console.log(b);

      return (
        <Slide key={i} index={i} className={classes.slide}>
          <div className={classes.slideBox}>
            <Avatar src={require(`../../../assets/images/${b.name.toLowerCase()}.svg`)} className={`${classes.avatar} avatar`} />
            <div className='designer-info'>
              <Typography className='designer-name'>{b.name}</Typography>
              <Typography className='designer-brand'>{b.country}</Typography>
            </div>
            <Button variant='contained' color='secondary' className='action-follow'>Follow</Button>
          </div>
        </Slide>
      )
    })
  }

  return (
    <div className={classes.root}>
      <div className={classes.headline}>
        <div className={classes.surroundingLine}></div>
        <Typography className={classes.sectionTitle} align='center'>
          Brands
        </Typography>
        <div className={classes.surroundingLine}></div>
      </div>
      <Typography className={classes.sectionDescription}>Something details something details something details</Typography>
      <CarouselProvider
        naturalSlideWidth={320}
        naturalSlideHeight={320}
        totalSlides={brands ? brands.length : 5}
        visibleSlides={5}
        orientation="horizontal"
        className={classes.carouselProvider}
      >
        <Slider style={{ overflow: 'hidden', height: 350 }}>
          {buildSlides()}
        </Slider>
        <ButtonBack className={`${classes.slideButton} prev`}><ChevronLeft /></ButtonBack>
        <ButtonNext className={`${classes.slideButton} next`}><ChevronRight /></ButtonNext>
      </CarouselProvider>
      <div className={classes.newLaunch}>
        <div className='text'>
          <Typography variant='subtitle2'>New Launch</Typography>
          <div>
            <Typography variant='h3'>Chanel's 2020</Typography>
            <Typography variant='body2'>“This is a happy, undeniably escapist collection,” says Chanel creative director, Jonathan Anderson, of his latest capsule collaboration with Paula’s Ibiza. Cue tie-dye tees, summer-ready espadrilles and the very best bags to carry our hopes of better times to come.</Typography>
          </div>
          <Link color='secondary'>Shop the Collection</Link>
        </div>
        <img src={MockVideo} alt="mock video" />
      </div>
      <div className={classes.models}>
        {
          models.map((m, i) => {
            return (
              <img src={m} alt='model' key={i} />
            )
          })
        }
      </div>
    </div >
  )
}
