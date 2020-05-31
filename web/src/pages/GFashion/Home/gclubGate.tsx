import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography, Avatar } from '@material-ui/core'
import GIcon from '../../../assets/images/g-icon.png'
import HIcon from '../../../assets/images/h-icon.png'
import joinGclub from '../../../assets/images/join-gclub.svg'
import Banner from '../../../assets/images/home_banner.jpg'
import { useTranslation } from 'react-i18next'
import { I18N, I18N_NS } from './_i18n'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      [theme.breakpoints.down('xl')]: {
        height: 850
      },
      [theme.breakpoints.down('lg')]: {
        height: 650
      },
      [theme.breakpoints.down('md')]: {
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
      [theme.breakpoints.down('xl')]: {
        top: 250
      },
      [theme.breakpoints.down('lg')]: {
        top: 200
      },
      [theme.breakpoints.down('md')]: {
        top: 100
      }
    },
    gates: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 5,
      [theme.breakpoints.down('xl')]: {
        top: 450
      },
      [theme.breakpoints.down('lg')]: {
        top: 350
      },
      [theme.breakpoints.down('md')]: {
        top: 250
      }
    },
    gateBox: {
      border: '1px solid #be9c63',
      [theme.breakpoints.down('xl')]: {
        width: 440,
        height: theme.spacing(20) - 5,
        '& .himaCoin': {
          fontSize: 40
        },
        '& .gDollar': {
          fontSize: 40
        }
      },
      [theme.breakpoints.down('lg')]: {
        width: 380,
        height: theme.spacing(15),
        '& .himaCoin': {
          fontSize: 32
        },
        '& .gDollar': {
          fontSize: 32
        }
      },
      [theme.breakpoints.down('md')]: {
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
)

export default () => {
  const classes = useStyles()
  const { t } = useTranslation(I18N_NS)

  return (
    <div className={classes.root}>
      <img alt="banner" src={Banner} className={classes.banner} />
      <img alt="title" src={joinGclub} className={classes.sectionTitle} />
      <div className={classes.gates}>
        <div className={classes.gateBox}>
          <Avatar src={HIcon} className={classes.gateIcon}></Avatar>
          <Typography align="center" className="himaCoin">
            {t(I18N.home.banner.himalaya_coin)}
          </Typography>
        </div>
        <div className={classes.gateBox}>
          <Avatar src={GIcon} className={classes.gateIcon}></Avatar>
          <Typography align="center" className="gDollar">
            {t(I18N.home.banner.g_dollar)}
          </Typography>
        </div>
      </div>
    </div>
  )
}
