import { KitThemeProps } from './interfaces';

export const kitDefaultProps: KitThemeProps = {
  typo: {
    bodyFontSize: '13px',
    primaryFontSize: '1rem',
    secondaryFontSize: '.9rem',
    headers: {
      h1: '3rem',
      h2: '2rem',
      h3: '1.8rem',
      h4: '1.6rem',
      h5: '1.4rem',
      h6: '1rem',
    }
  },
  colors: {
    brand: '',
    brandInverse: '',
    bg: '',
    bgInverse: '',
    link: '#0084ff',
    primary: '#0084ff',
    info: '#aaaaaa',
    success: '#2dc100',
    warning: '#ffb62f',
    error: '#ff5500',
    disabled: '#bbbbbb',
  }
};
