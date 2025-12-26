import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { SF_PRO_TEXT_FONT_FACES } from './constants';
import MainPage from './MainPage';

const baseTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: '#a8a8a8',
    },
    background: {
      default: '#f3f3f3',
      paper: '#ffffff',
      checked: '#fcd502',
    },
    border: {
      default: 'rgba(168, 168, 168, 0.2)',
    },
  },
  typography: {
    fontFamily: [
      'SF Pro Text',
      'SF Pro Display',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '16px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1,
    },
    subtitle2: {
      fontSize: '11px',
      fontWeight: 400,
      lineHeight: 1,
    },
  },
  breakpoints: {
    values: {
      xxs: 320,
      xs: 360,
      sm: 420,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

const themeWithComponents = createTheme({
  ...baseTheme,
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => `
        ${SF_PRO_TEXT_FONT_FACES.map(
          (face) => `
          @font-face {
            font-family: '${face.fontFamily}';
            font-style: ${face.fontStyle};
            font-weight: ${face.fontWeight};
            font-display: ${face.fontDisplay};
            src: ${face.src};
          }
        `
        ).join('')}
        
        body {
          padding: ${theme.spacing(2)};
          background-color: ${theme.palette.background.default};
          color: ${theme.palette.text.primary};
          font-family: ${theme.typography.fontFamily};
          font-style: normal;
          font-weight: 400;
          font-synthesis: none;
        }
        
        * {
          box-sizing: border-box;
        }
      `,
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 'auto',
        },
        indicator: {
          display: 'none',
        },
        flexContainer: {
          gap: 10,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          minHeight: 24,
          backgroundColor: theme.palette.background.paper,
          borderRadius: 12,
          textTransform: 'none',
          minWidth: 'auto !important',
          padding: '10px',
          fontSize: '14px',
          fontWeight: 400,
          color: theme.palette.primary.main,
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.paper,
          },
          '&:hover': {
            backgroundColor: theme.palette.background.default,
          },
        }),
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          '& .MuiStepLabel-iconContainer': {
            width: '100%',
          },
          gap: '4px',
        },
      },
    },
    MuiStep: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '0',
          '& .MuiStepLabel-label': {
            marginTop: '0 !important',
            color: `${theme.palette.text.secondary} !important`,
            fontSize: '11px !important',
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          borderRadius: '8px',
          '& .MuiInputBase-root': {
            borderRadius: '8px',
          },
          '& .MuiInputBase-input': {
            fontSize: '18px',
            color: theme.palette.primary.main,
            WebkitTextFillColor: `${theme.palette.primary.main}`,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette.border.default} !important`,
          },
        }),
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          '& .MuiRadio-root': {
            padding: '0',
            marginRight: '10px',
          },
        },
        label: ({ theme }) => ({
          fontSize: '12px',
          color: theme.palette.primary.main,
          [baseTheme.breakpoints.up('xs')]: {
            fontSize: '14px',
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          borderRadius: '10px',
          '& fieldset': {
            display: 'none',
          },
        }),
        icon: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
        select: {
          display: 'flex',
          alignItems: 'center',
          padding: '8px 12px',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          '&.Mui-checked': {
            color: 'background.checked',
          },
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          padding: '0 14px',
          flexWrap: 'nowrap',
          gap: '12px',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          '&.Mui-checked': {
            color: theme.palette.primary.main,
            '& svg': {
              path: {
                display: 'none',
              },
            },
            '& svg:first-child': {
              backgroundColor: theme.palette.background.checked,
              borderRadius: '50%',
            },
            '& svg:last-child': {
              backgroundColor: theme.palette.primary.main,
              borderRadius: '50%',
              width: '12px',
              height: '12px',
              transform: 'translate(50%, 50%)',
            },
          },
        }),
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={themeWithComponents}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
