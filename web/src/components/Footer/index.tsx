import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link, Typography, List, ListItem } from '@material-ui/core';
import './index.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.palette.background.default,
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
    }
  }),
);

export default function Footer() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.links}>
        <div className="start">
          <div className="group">
            <List>
              <ListItem>
                <Typography className={classes.title}>联系我们</Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.content}>vog@gmail.com</Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.content}>+1-777-777-777</Typography>
              </ListItem>
            </List>
          </div>
          <div className="group">
            <List>
              <ListItem>
                <Typography className={classes.title}>帮助</Typography>
              </ListItem>
              <ListItem>
                <Link className={classes.content}>常见问题</Link>
              </ListItem>
            </List>
          </div>
          <div className="group">
            <List>
              <ListItem>
                <Typography className={classes.title}>关于我们</Typography>
              </ListItem>
              <ListItem>
                <Link className={classes.content}>企业介绍</Link>
              </ListItem>
            </List>
          </div>
          <div className="group">
            <List>
              <ListItem>
                <Typography className={classes.title}>政策与法规</Typography>
              </ListItem>
              <ListItem>
                <Link className={classes.content}>隐私协议</Link>
              </ListItem>
              <ListItem>
                <Link className={classes.content}>用户协议</Link>
              </ListItem>
            </List>
          </div>
          <div className="group">
            <List>
              <ListItem>
                <Typography className={classes.title}>语言</Typography>
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
        <div className="end">
          <List>
            <ListItem>
              <Link className={classes.quickLink}>加入Gclub</Link>
            </ListItem>
            <ListItem>
              <Link className={classes.quickLink}>入驻Gfashion</Link>
            </ListItem>
            <ListItem>
              <Link className={classes.quickLink}>入驻Gmall</Link>
            </ListItem>
          </List>
        </div>
      </div>
      <div className="copyright">Copyright &copy; 2020 VOG. All rights reserved.</div>
    </div>
  )
}