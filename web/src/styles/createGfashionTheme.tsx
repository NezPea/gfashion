import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    appDrawer: {
      width: React.CSSProperties['width'],

    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    appDrawer?: {
      width?: React.CSSProperties['width']
    }
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    productDetail: string;
    footer: string;
    designerHeaderLighter: string;
    designerHeaderDeeper: string;
  }
}

export default function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    appDrawer: {
      width: 225
    },
    ...options,
  })
}