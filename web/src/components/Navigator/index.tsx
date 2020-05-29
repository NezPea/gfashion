import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, SwipeableDrawer } from '@material-ui/core';
import { AccountCircle, ShoppingCart, ExpandMore } from '@material-ui/icons';
import ShoppingCartImg from '../../assets/images/shopping_cart.svg';
import ProfileImg from '../../assets/images/profile.svg';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import DrawerList from './drawerList';
import GIcon from '../../assets/images/g_icon.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)'
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'block',
      fontFamily: `'Lobster 1.4'`,
      fontSize: '2rem',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 1),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 1),
      },
      color: '#888',
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(3),
      width: 'auto',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        width: '100%',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    brotherLink: {
      color: '#A6978D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 'calc(45px + 1vw)',
      fontFamily: 'Montserrat',
      fontSize: 24,
      textDecoration: 'none',
      '& .g-icon': {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20
      }
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      color: '#888',
      fontFamily: 'PingFangSC',
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '20ch',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    sectionDesktop: {
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    sectionMobile: {
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
      },
    },
    languageSelection: {
      '& .text': {
        width: '1.25rem',
        height: '1.25rem',
        border: '1px solid #222',
        borderRadius: '0.625rem',
        fontSize: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      color: '#222',
      borderRadius: 8
    }
  }),
);

// const availableLangs = ['EN', 'ZH', 'FR', 'JA']

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  // const [currentLanguage, setCurrentLanguage] = useState('EN')

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => { setIsDrawerOpen(true) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Gfashion
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <a className={classes.brotherLink} href="https://gtv.org" target="_blank" rel="noopener noreferrer">
              <img alt='G' src={GIcon} className='g-icon' />TV
            </a>
            <a className={classes.brotherLink} href="https://gnews.org" target="_blank" rel="noopener noreferrer">
              <img alt='G' src={GIcon} className='g-icon' />NEWS
            </a>
            <IconButton aria-label="shopping cart" color="inherit">
              <Badge badgeContent={6} color="secondary">
                <img src={ShoppingCartImg} alt='shopping cart' />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="show profile"
              color="inherit"
              onClick={handleProfileMenuOpen}
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <Badge badgeContent={3} color="secondary">
                <img src={ProfileImg} alt='user profile' />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              className={classes.languageSelection}
            >
              <div className='text'>
                EN
              </div>
              <ExpandMore />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => { setIsDrawerOpen(false) }}
        onOpen={() => { console.log('opened') }}
      >
        <DrawerList />
      </SwipeableDrawer>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
