import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ButtonBase } from '@material-ui/core';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: '#fff',
      margin: '0 10px'
    }
  }),
);



export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                      <Link className={classes.link} href='/'>Gfashion</Link>
                      <Link className={classes.link} href='/gmall'>Gmall</Link>
                      <Link className={classes.link} href='/gclub'>Gclub</Link>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}