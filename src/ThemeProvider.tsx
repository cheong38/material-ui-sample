import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const NOTO_SANS_KR_FONT_FAMILY = ['\'Noto Sans CJK KR\'', 'sans-serif'].join(',')

interface VariantColor {
  900: string
  800: string
  700: string
  600: string
  500: string
  400: string
  300: string
  100: string
  200: string
  50: string
}

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    _blue: VariantColor
    _gray: VariantColor
  }

  // For typing when making styles with theme.
  // For example:
  //  const useStyles = makeStyles((theme) => ({
  //    root: {
  //      backgroundColor: theme.palette._dark['800'],
  //    }
  //  }))
  interface Palette {
    _blue: VariantColor
    _gray: VariantColor
  }
}

const color: PaletteOptions = {
  // Brand Color
  _blue: {
    900: '#0035F1',
    800: '#0047F3',
    700: '#0051F5',
    600: '#005BF6',
    500: '#0063F7',
    400: '#267AF8',
    300: '#4D92F9',
    200: '#80B1FB',
    100: '#B3D0FD',
    50: '#E0ECFE'
  },
  _gray: {
    900: '#101010',
    800: '#202020',
    700: '#303030',
    600: '#404040',
    500: '#505050',
    400: '#707070',
    300: '#909090',
    200: '#A0A0A0',
    100: '#C0C0C0',
    50: '#F0F0F0',
  }
}

const typography: TypographyOptions = {
  h1: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 'normal',
    lineHeight: 1.4,
    textTransform: 'none'
  },
  h2: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 'normal',
    lineHeight: 1.5,
    textTransform: 'none'
  },
  h3: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 'normal',
    lineHeight: 1.4,
    textTransform: 'none'
  },
  h4: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 'normal',
    lineHeight: 1.4,
    textTransform: 'none'
  },
  h5: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 'normal',
    lineHeight: 1.4,
    textTransform: 'none'
  },
  h6: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 'normal',
    lineHeight: 1.5,
    textTransform: 'none'
  },
  subtitle1: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: 'normal',
    lineHeight: 1.4
  },
  subtitle2: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 'normal',
    lineHeight: 1.4
  },
  body1: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 16,
    fontWeight: 'normal',
    letterSpacing: 'normal',
    lineHeight: 1.6
  },
  body2: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 14,
    fontWeight: 'normal',
    letterSpacing: 'normal',
    lineHeight: 1.7
  },
  caption: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 12,
    fontWeight: 'normal',
    letterSpacing: 'normal',
    lineHeight: 1.4,
    textTransform: 'none'
  },
  button: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 'normal',
    lineHeight: 1.5,
    textTransform: 'none'
  },
  overline: {
    fontFamily: NOTO_SANS_KR_FONT_FAMILY,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 1.6,
    textTransform: 'uppercase'
  }
}

const theme = createMuiTheme({
  overrides: {
    MuiMenuItem: {
      root: {
        height: 45,
        minHeight: 45,
        '&$selected, &$selected:hover': {
          backgroundColor: 'rgba(83, 109, 254, 0.1)',
          fontWeight: 'bold'
        }
      }
    },
    MuiTypography: {
      root: {
        whiteSpace: 'pre-line'
      }
    }
  },
  palette: {
    primary: {
      main: color._blue[500]
    },
    secondary: {
      main: color._gray[500]
    },
    success: {
      dark: color._gray[800],
      light: color._gray[300],
      main: color._blue[300]
    },
    ...color
  },
  props: {
    MuiCheckbox: {
      color: 'primary'
    },
    MuiTabs: {
      indicatorColor: 'primary',
      textColor: 'primary'
    },
    MuiTextField: {
      variant: 'outlined'
    }
  },
  typography
})

const ThemeProvider: React.FC = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)

export default ThemeProvider
