import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { GfBackground } from './app/types';

let gfBackground: GfBackground = {
  default: '#fbf7f4',
  paper: '#fff',
  productDetail: '#fbf8f4',
  footer: '#f7f5f1',
  designerHeaderLighter: '#978a80',
  designerHeaderDeeper: '#7b6e64'
}

function App() {
  const isDarkModePrefered = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(() => {
    return createMuiTheme({
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
        text: {
          primary: '#222222',
          secondary: '#888888'
        },
        divider: '#e6e6e6',
        background: gfBackground,
        // ... and we will overrides more default colors at here
        type: isDarkModePrefered ? 'dark' : 'light',
      },
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'Lobster 1.4',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    })
  }, [isDarkModePrefered])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
