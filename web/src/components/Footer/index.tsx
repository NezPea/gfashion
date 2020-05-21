import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link, Typography, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginBottom: 80,
      padding: '50px 20px'
    },
    links: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexDirection: 'row',
      '& .start': {
        display: 'flex',
        flexDirection: 'row'
      }
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
                <Typography>联系我们</Typography>
              </ListItem>
              <ListItem>
                <Typography>vog@gmail.com</Typography>
              </ListItem>
              <ListItem>
                <Typography>+1-777-777-777</Typography>
              </ListItem>
            </List>
          </div>
          <div className="group">
            <List>
              <ListItem>
                <Typography>帮助</Typography>
              </ListItem>
              <ListItem>
                <Link>常见问题</Link>
              </ListItem>
            </List>
          </div>
          <div className="group">
            <List>
              <ListItem>
                <Typography>关于我们</Typography>
              </ListItem>
              <ListItem>
                <Link>企业介绍</Link>
              </ListItem>
            </List>
          </div>
          <div className="group">
            <List>
              <ListItem>
                <Typography>政策与法规</Typography>
              </ListItem>
              <ListItem>
                <Link>隐私协议</Link>
              </ListItem>
              <ListItem>
                <Link>用户协议</Link>
              </ListItem>
            </List>
          </div>
          <div className="group">
            <List>
              <ListItem>
                <Typography>语言</Typography>
              </ListItem>
              <ListItem>
                <Link>中文简体</Link>
              </ListItem>
              <ListItem>
                <Link>中文繁体</Link>
              </ListItem>
              <ListItem>
                <Link>English</Link>
              </ListItem>
            </List>
          </div>
        </div>
        <div className="end">
          <List>
            <ListItem>
              <Link>加入Gclub</Link>
            </ListItem>
            <ListItem>
              <Link>入驻Gfashion</Link>
            </ListItem>
            <ListItem>
              <Link>入驻Gmall</Link>
            </ListItem>
          </List>
        </div>
      </div>
      <div className="copyright">Copyright © 2020 VOG. All rights reserved.</div>
    </div>
  )
}