import {createTheme} from '@shopify/restyle';

export const palatte = {
  blueDark: '#000A3A',

  gray: '#9B9B9B',
  gray2: '#999',
  gray3: '#FAFAFA',
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
    landingGrayText: palatte.gray,
    primaryBackground: palatte.blueDark,
    textPrimary: palatte.blueDark,
    textBlack: palatte.black,
    textGray: palatte.gray2,
    textBlue: palatte.blue,
    searchBarInput: palatte.gray3,
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
    landingScreenGray: {
      fontFamily: 'SansPro-Bold',
      fontSize: 43,
      lineHeight: 43,
      color: 'landingGrayText',
    },
    landingScreenPrimary: {
      fontFamily: 'SansPro-Bold',
      fontSize: 43,
      lineHeight: 43,
      color: 'buttonPrimaryBackground',
    },
    emptySearchTitle: {
      fontFamily: 'Demi',
      fontSize: 16,
      color: 'textBlack',
      lineHeight: 18,
    },
    emptySearchSubtitle: {
      fontFamily: 'Regular',
      fontSize: 14,
      color: 'textGray',
      lineHeight: 20,
    },
    searchMatch: {
      fontFamily: 'Demi',
      fontSize: 20,
      lineHeight: 21,
      color: 'textPrimary',
    },
    textButton: {
      fontFamily: 'Regular',
      fontSize: 12,
      lineHeight: 21,
      color: 'textBlue',
    },
    searchFilter: {
      fontFamily: 'Regular',
      fontSize: 14,
      lineHeight: 20,
      color: 'textGray',
    },
    selectedSearchFilter: {
      fontFamily: 'Bold',
      fontSize: 14,
      lineHeight: 20,
      color: 'textPrimary',
    },
  },
});

export default theme;
