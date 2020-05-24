import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Avatar } from '@material-ui/core';
import GIcon from '../../../assets/images/g-icon.png';
import HIcon from '../../../assets/images/h-icon.png';
import JoinGclub from '../../../assets/images/join-gclub.svg';
import Banner from '../../../assets/images/banner.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      [theme.breakpoints.up("xl")]: {
        height: 946
      },
      [theme.breakpoints.up('lg')]: {
        height: 700
      },
      [theme.breakpoints.up("md")]: {
        height: 500
      }
    },
    banner: {
      position: 'relative',
      zIndex: 0,
      width: '100%'
    },
    sectionTitle: {
      position: 'absolute',
      zIndex: 5,
      width: '450px',
      [theme.breakpoints.up("xl")]: {
        top: 350
      },
      [theme.breakpoints.up('lg')]: {
        top: 250
      },
      [theme.breakpoints.up("md")]: {
        top: 150
      }
    },
    gates: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 5,
      [theme.breakpoints.up("xl")]: {
        top: 450
      },
      [theme.breakpoints.up('lg')]: {
        top: 350
      },
      [theme.breakpoints.up("md")]: {
        top: 250
      }
    },
    gateBox: {
      border: '1px solid #be9c63',
      [theme.breakpoints.up("xl")]: {
        width: 440,
        height: theme.spacing(20) - 5,
        '& .himaCoin': {
          fontSize: 40
        },
        '& .gDollar': {
          fontSize: 40
        }
      },
      [theme.breakpoints.up("lg")]: {
        width: 380,
        height: theme.spacing(15),
        '& .himaCoin': {
          fontSize: 32
        },
        '& .gDollar': {
          fontSize: 32
        }
      },
      [theme.breakpoints.up('md')]: {
        width: 300,
        height: theme.spacing(12),
        '& .himaCoin': {
          fontSize: 24
        },
        '& .gDollar': {
          fontSize: 24
        }
      },
      margin: '0 15px',
      padding: theme.spacing(6, 4),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      color: '#be9c63',
      '& .himaCoin': {
        fontFamily: `'STSongti-SC'`
      },
      '& .gDollar': {
        fontFamily: `'Georgia'`
      }
    },
    gateIcon: {
      marginRight: theme.spacing(2)
    }
  })
);

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={Banner} className={classes.banner} />
      <img src={JoinGclub} className={classes.sectionTitle} />
      <div className={classes.gates}>
        <div className={classes.gateBox}>
          <Avatar src={HIcon} className={classes.gateIcon}></Avatar>
          <Typography align='center' className='himaCoin'>Himalaya Coin</Typography>
        </div>
        <div className={classes.gateBox}>
          <Avatar src={GIcon} className={classes.gateIcon}></Avatar>
          <Typography align='center' className='gDollar'>G-dollar</Typography>
        </div>
      </div>
    </div>
  )
}
