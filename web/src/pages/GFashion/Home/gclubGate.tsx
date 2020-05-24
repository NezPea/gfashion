import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
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
    sectionTitle: {
      marginBottom: 50
    },
    gates: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
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
    }
  })
);

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h2' align='center' className={classes.sectionTitle}>Join Gclub</Typography>
      <div className={classes.gates}>
        <div className={classes.gateBox}>
          <Typography align='center' className='himaCoin'>Himalaya Coin</Typography>
        </div>
        <div className={classes.gateBox}>
          <Typography align='center' className='gDollar'>G-dollar</Typography>
        </div>
      </div>
    </div>
  )
}
