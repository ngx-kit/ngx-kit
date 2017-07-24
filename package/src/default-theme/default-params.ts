import { KitDefaultThemeParams } from './meta';

export const defaultParams: KitDefaultThemeParams = {
  grid: {
    v: 8,
    h: 8,
  },
  colors: [
    {
      name: 'brand',
      background: '#0084ff',
      text: '#ffffff',
      border: '#0084ff',
    },
    {
      name: 'body',
      background: '#fff',
      text: '#444',
      border: '#eee',
    },
    {
      name: 'link',
      background: 'transparent',
      text: '#0084ff',
      border: 'transparent',
    },
    {
      name: 'input',
      background: '#f7f7f7',
      text: '#585858',
      border: '#eee',
    },
    {
      name: 'button',
      background: '#e2e2e2',
      text: '#585858',
      border: '#dadada',
    },
    {
      name: 'disabled',
      background: '#ccc',
      text: '#585858',
      border: '#aaa',
    },
    {
      name: 'success',
      background: '#2dc100',
      text: '#ffffff',
      border: '#2dc100',
    },
    {
      name: 'warning',
      background: '#ffb62f',
      text: '#ffffff',
      border: '#ffb62f',
    },
    {
      name: 'error',
      background: '#ff5500',
      text: '#ffffff',
      border: '#ffb62f',
    },
  ],
  colorMod: {
    type: 'darken',
    ratio: 1,
  },
  shadows: {
    element: '0 0 2px 0 rgba(50, 50, 50, 0.1)',
    deep: '0 0 20px 0 rgba(50, 50, 50, 0.1)',
    overlay: '0 0 6px 0 rgba(50, 50, 50, 0.1)',
  },
  border: {
    width: 1,
    radius: {
      s: 2,
      m: 6,
      l: 12,
    },
  },
  transitions: {
    default: 'all .3s',
  },
  modules: {
    autoComplete: {
      resultsColor: 'body',
    },
    badge: {
      defaultColor: 'brand',
    },
    buttons: {
      defaultColor: 'button',
      disabledColor: 'disabled',
    },
    checkbox: {
      color: 'input',
      checkedColor: 'brand',
    },
    datePicker: {
      color: 'input',
    },
    dropdownMenu: {
      menuColor: 'body',
    },
    form: {
      errorColor: 'error',
    },
    input: {
      color: 'input',
      focusColor: 'brand',
    },
    menu: {
      color: 'body',
      groupTitleFontSize: '.9rem',
    },
    radio: {
      color: 'input',
      checkedColor: 'brand',
    },
    select: {
      color: 'button',
    },
    tag: {
      defaultColor: 'button',
    },
    textarea: {
      color: 'input',
      focusColor: 'brand',
    },
    toggle: {
      color: 'button',
      checkedColor: 'brand',
    },
  },
  raws: {
    bodyColor: 'body',
    bodyFontSize: '13px',
    headersSizes: {
      h1: '2.2rem',
      h2: '1.6rem',
      h3: '1.4rem',
      h4: '1.1rem',
      h5: '1rem',
      h6: '.9rem',
    },
    linkColor: 'link',
  },
};
