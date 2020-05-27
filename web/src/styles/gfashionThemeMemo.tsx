import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import createGfashionTheme from './createGfashionTheme';

export default () => {
  const isDarkModePrefered = useMediaQuery('(prefers-color-scheme: dark)');

  return React.useMemo(() => {
    return createGfashionTheme({
      appDrawer: { width: 20 },
      palette: {
        primary: {
          light: '#fbf7f4',
          main: '#fbf7f4',
          // dark: specify or auto-generated by main color
          contrastText: '#a6978d'
        },
        secondary: {
          main: '#be9c63',
          contrastText: '#fff'
        },
        background: {
          default: '#fbf7f4',
          paper: '#fff',
          productDetail: '#fbf8f4',
          footer: '#f7f5f1',
          designerHeaderLighter: '#978a80',
          designerHeaderDeeper: '#7b6e64'
        },
        // ... and we will overrides more default colors at here
        type: isDarkModePrefered ? 'dark' : 'light',
      },
      typography: {
        homeSectionTitle: {
          fontSize: '1.875rem',
          fontFamily: 'Georgia',
          fontWeight: 'bold',
          letterSpacing: 5,
          color: '#222'
        },
        homeSectionDescription: {
          fontSize: '1rem',
          fontFamily: 'Georgia',
          fontWeight: "normal",
          letterSpacing: 1,
          color: '#222'
        },
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'Georgia',
          'Lobster 1.4',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    });
  }, [isDarkModePrefered])
}