import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      background: '#1B1B1B',
      backgroundSecondary: '#242424',
      primary: '#D9D9D9',
      secondary: '#A8A8AA',
      tertiary: '#35373A',
      green: '#009865',
      green110: '#048358',
      green120: '#036141',
      green140: '#023423',
      greenLight: '#E8FFF7',
      red90: '#DB4D59',
      red: '#C72C39',
      red110: '#961721',


    },
  },
  styles: {
    global: {
      html: {
        boxSizing: 'border-box',
      },
      body: {
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        bg: '#1B1B1B',
        color: '#D9D9D9',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
      },
    },
  },
});
