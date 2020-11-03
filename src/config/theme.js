import {createTheme} from '@shopify/restyle';

export const palatte = {
  blueDark: '#000A3A',

  gray: '#9B9B9B',
  gray2: '#999',
  gray3: '#FAFAFA',
  gray4: '#666',
  blue: '#1963D0',
  yellow: '#FFB802',

  black2: '#010101',

  black: '#333',
  white: '#FFF',

  carYellow: '#FAF0B4',
  carPink: '#FFD4C1',
  carGray: '#FAFAFA',

  transparent: 'transparent',
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
    textBlack2: palatte.black2,
    textGray: palatte.gray2,
    textGray2: palatte.gray4,
    textBlue: palatte.blue,
    searchBarInput: palatte.gray3,
    transparent: palatte.transparent,
    whiteText: palatte.white,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  shape: {
    borderRadius: 20,
    noBorder: 0,
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
    hotDealsTitle: {
      fontFamily: 'Demi',
      fontSize: 18,
      lineHeight: 21,
      color: 'textBlack2',
    },
    hotDealsItemTitle: {
      fontFamily: 'Bold',
      fontSize: 15,
      lineHeight: 18,
      color: 'textPrimary',
    },
    hotDealsItemSubtitle: {
      fontFamily: 'Regular',
      fontSize: 15,
      lineHeight: 18,
      color: 'textPrimary',
    },
    hotDealsRating: {
      fontFamily: 'Regular',
      fontSize: 13,
      lineHeight: 15,
      color: 'textGray2',
    },
    hotDealsReviewCount: {
      fontFamily: 'Regular',
      fontSize: 13,
      lineHeight: 15,
      color: 'textGray',
    },
    cardCaption: {
      fontFamily: 'Regular',
      fontSize: 11,
      lineHeight: 20,
      color: 'textPrimary',
    },
    cardTitle: {
      fontFamily: 'Bold',
      fontSize: 16,
      lineHeight: 20,
      color: 'textPrimary',
    },
    textButtonText: {
      fontFamily: 'Demi',
      fontSize: 18,
      lineHeight: 20,
      color: 'textPrimary',
    },
    textButtonPrimaryText: {
      fontFamily: 'Demi',
      fontSize: 18,
      lineHeight: 20,
      color: 'whiteText',
    },
  },
});

export default theme;
