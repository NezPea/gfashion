import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Link, Typography, List, ListItem } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { I18N, I18N_NS } from '../../pages/GFashion/Home/_i18n'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.palette.background.footer,
      padding: '50px 20px 30px 20px'
    },
    links: {
      maxWidth: '1400px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      '& .start': {
        display: 'flex',
        flexDirection: 'row'
      }
    },
    title: {
      color: '#222222',
      fontSize: '14px',
      fontWeight: 500
    },
    content: {
      paddingTop: '2px',
      paddingBottom: '2px',
      color: '#888888',
      fontSize: '12px',
      cursor: 'pointer',
      textDecoration: 'none'
    },
    quickLink: {
      cursor: 'pointer',
      color: '#be9c63',
      fontSize: '14px'
    },
    group: {
      marginRight: '4rem',
      fontFamily: 'PingFangSC',
      '&:last-child': {
        marginRight: 0
      }
    },
    end: {
      fontFamily: 'PingFangSC'
    },
    copyright: {
      marginTop: theme.spacing(6),
      fontFamily: 'PingFangSC',
      fontSize: '0.75rem',
      color: '#888'
    }
  })
)

export default function Footer() {
  const classes = useStyles()
  const { t } = useTranslation(I18N_NS)

  return (
    <div className={classes.root}>
      <div className={classes.links}>
        <div className="start">
          <div className={classes.group}>
            <List>
              <ListItem>
                <Typography className={classes.title}>
                  {t(I18N._common.footer.contact_us._self)}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.content}>
                  vog@gmail.com
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.content}>
                  +1-777-777-777
                </Typography>
              </ListItem>
            </List>
          </div>
          <div className={classes.group}>
            <List>
              <ListItem>
                <Typography className={classes.title}>
                  {t(I18N._common.footer.help._self)}
                </Typography>
              </ListItem>
              <ListItem>
                <Link className={classes.content}>
                  {t(I18N._common.footer.help.common_problem)}
                </Link>
              </ListItem>
            </List>
          </div>
          <div className={classes.group}>
            <List>
              <ListItem>
                <Typography className={classes.title}>
                  {t(I18N._common.footer.about_us._self)}
                </Typography>
              </ListItem>
              <ListItem>
                <Link className={classes.content}>
                  {t(I18N._common.footer.about_us.introduction)}
                </Link>
              </ListItem>
            </List>
          </div>
          <div className={classes.group}>
            <List>
              <ListItem>
                <Typography className={classes.title}>
                  {t(I18N._common.footer.policies_and_rules._self)}
                </Typography>
              </ListItem>
              <ListItem>
                <Link className={classes.content}>
                  {t(I18N._common.footer.policies_and_rules.privacy_agreement)}
                </Link>
              </ListItem>
              <ListItem>
                <Link className={classes.content}>
                  {t(I18N._common.footer.policies_and_rules.user_agreement)}
                </Link>
              </ListItem>
            </List>
          </div>
          <div className={classes.group}>
            <List>
              <ListItem>
                <Typography className={classes.title}>
                  {t(I18N._common.footer.language._self)}
                </Typography>
              </ListItem>
              <ListItem>
                <Link className={classes.content}>中文简体</Link>
              </ListItem>
              <ListItem>
                <Link className={classes.content}>中文繁体</Link>
              </ListItem>
              <ListItem>
                <Link className={classes.content}>English</Link>
              </ListItem>
            </List>
          </div>
        </div>
        <div className={classes.end}>
          <List>
            <ListItem>
              <Link className={classes.quickLink}>
                {t(I18N._common.footer.other_links.join_gclub)}
              </Link>
            </ListItem>
            <ListItem>
              <Link className={classes.quickLink}>
                {t(I18N._common.footer.other_links.settle_gfashion)}
              </Link>
            </ListItem>
            <ListItem>
              <Link className={classes.quickLink}>
                {t(I18N._common.footer.other_links.settle_gmall)}
              </Link>
            </ListItem>
          </List>
        </div>
      </div>
      <div className={classes.copyright}>
        Copyright &copy; 2020 VOG. All rights reserved.
      </div>
    </div>
  )
}
