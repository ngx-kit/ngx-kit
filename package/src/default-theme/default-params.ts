import {
  KitDefaultThemeParams,
  KitDefaultThemeParamsBorders,
  KitDefaultThemeParamsColors,
  KitDefaultThemeParamsGrid,
  KitDefaultThemeParamsShadows,
  KitDefaultThemeParamsTransitions,
} from './meta/params';

export class KitDefaultThemeDefaultParams implements KitDefaultThemeParams {
  borders: KitDefaultThemeParamsBorders = {
    radius: 2,
    width: 1,
  };

  colors: KitDefaultThemeParamsColors = {
    background: '#f7f7f7',
    invert: '#4a505a',
    border: '#d5dae6',
    input: '#d6d6d6',
    swatches: {
      'default': {
        base: '#ccc',
        invert: '#404040',
      },
      'primary': {
        base: '#2399e5',
        invert: '#fff',
      },
      'info': {
        base: '#5bc0de',
        invert: '#fff',
      },
      'success': {
        base: '#5cb85c',
        invert: '#fff',
      },
      'warning': {
        base: '#f0ad4e',
        invert: '#fff',
      },
      'error': {
        base: '#d9534f',
        invert: '#fff',
      },
    },
  };

  grid: KitDefaultThemeParamsGrid = {
    h: 8,
    v: 8,
  };

  shadows: KitDefaultThemeParamsShadows = {
    element: '0 0 2px 0 rgba(50, 50, 50, 0.1)',
    deep: '0 0 20px 0 rgba(50, 50, 50, 0.1)',
    overlay: '0 0 6px 0 rgba(50, 50, 50, 0.1)',
  };

  transitions: KitDefaultThemeParamsTransitions = {
    'default': 'all .3s',
  };
}
