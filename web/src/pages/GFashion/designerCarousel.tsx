import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      height: 300,
      minWidth: 800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    slideContainer: {
      '& ul': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }
    }
  }),
);

interface Designer {
  name: string;
  avatar: string
}

interface designersProps {
  designers: Array<Designer>;
}

export const DesignerCarousel: React.FunctionComponent<designersProps> = ({ designers = [] }) => {
  const classes = useStyles();

  const buildSlides = () => {
    return designers.map((m, i) => {
      return (
        <Slide key={i} index={i}>
          <Box>
            <Avatar src={m.avatar} />
            <Typography>{m.name}</Typography>
          </Box>
        </Slide>
      )
    })
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <CarouselProvider
          naturalSlideWidth={250}
          naturalSlideHeight={350}
          totalSlides={designers.length}
          visibleSlides={3}
        >
          <Slider className={classes.slideContainer}>
            {buildSlides()}
          </Slider>
          <ButtonBack className='slide-back'>prev</ButtonBack>
          <ButtonNext className='slide-next'>next</ButtonNext>
        </CarouselProvider>
      </Grid>
    </div>
  )
}
