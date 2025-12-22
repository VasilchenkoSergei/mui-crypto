import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface TypeBackground {
    checked: string;
  }

  interface Palette {
    border: {
      default: string;
    };
  }

  interface PaletteOptions {
    border?: {
      default: string;
    };
  }
}
