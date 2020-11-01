import {createTheme} from '@shopify/restyle';

export const palatte = {
  blueDark: '#000A3A',

  gray: '#9B9B9B',
  blue: '#1963D0',
  yellow: '#FFB802',

  black: '#333',
  white: '#FFF',
};

const theme = createTheme({
  colors: {
    mainBackground: palatte.white,
    mainForeground: palatte.black,
    buttonPrimaryBackground: palatte.blueDark,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    body: {
      fontFamily: 'Regular',
      fontSize: 16,
      lineHeight: 24,
    },
    body2: {
      fontFamily: 'Demi',
      fontSize: 18,
      lineHeight: 43,
      color: 'buttonPrimaryBackground',
    },
  },
});

export default theme;
