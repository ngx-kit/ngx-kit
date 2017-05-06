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
    swatches: [
      {
        name: 'white',
        color: '#ffffff',
        text: '#333333',
      },
      {
        name: 'blue',
        color: '#0084ff',
        text: '#ffffff',
      },
      {
        name: 'green',
        color: '#2dc100',
        text: '#ffffff',
      },
      {
        name: 'red',
        color: '#ff5500',
        text: '#ffffff',
      },
      {
        name: 'orange',
        color: '#ffb62f',
        text: '#ffffff',
      },
      {
        name: 'grey',
        color: '#cccccc',
        text: '#444444',
      },
      {
        name: 'dark-grey',
        color: '#aaaaaa',
        text: '#333333',
      },
    ],
    types: {
      brand: 'blue',
      page: 'white',
      border: 'grey',
      link: 'blue',
      primary: 'blue',
      important: 'red',
      info: 'grey',
      success: 'green',
      warning: 'orange',
      error: 'red',
      disabled: 'dark-grey',
      added: 'green',
      removed: 'red',
    }
  },
};
