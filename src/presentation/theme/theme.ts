import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Archivo', 'sans-serif'].join(','),
    h1: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: '37px',
    },
    h2: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 32,
      lineHeight: '35px',
    },
    h3: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 29,
      lineHeight: '32px',
    },
    h4: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 22,
      lineHeight: '24px',
    },
    h6: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '22px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1290,
      xl: 1536,
    },
  },
  palette: {
    background: {
      black: '#000',
      white: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface TypeBackground {
    default: string;
    paper: string;
    black: string;
    white: string;
  }

  interface Palette {
    background: TypeBackground;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    background?: Partial<TypeBackground>;
  }
}

export default theme;
