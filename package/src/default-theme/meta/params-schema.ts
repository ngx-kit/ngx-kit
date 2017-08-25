const basicColorSet = {
  background: 'color',
  border: 'color',
  text: 'color',
};
const typoColorSet = {
  background: 'color',
  text: 'color',
};
const defaultColors = ['default', 'primary', 'info', 'success', 'warning', 'error'];
function extract(keys: string[], schema: any) {
  return keys.reduce((prev, curr) => {
    prev[curr] = schema;
    return prev;
  }, {});
}
export const paramsSchema = {
  grid: {
    h: 'number',
    v: 'number',
  },
  borders: {
    radius: 'number',
    width: 'number',
  },
  colors: {
    background: 'color',
    invert: 'color',
    border: 'color',
    input: 'color',
    swatches: {
      ...extract(defaultColors, {
        base: 'color',
        invert: 'color',
      }),
    },
  },
  shadows: {
    element: 'string',
    deep: 'string',
    overlay: 'string',
  },
  transitions: {
    'default': 'string',
  },
  moduleSpinner: {
    duration: 'string',
    size: 'number',
    type: 'string',
  },
  moduleTypo: {
    fontSize: 'string',
    headingFontSizes: {
      h1: 'string',
      h2: 'string',
      h3: 'string',
      h4: 'string',
      h5: 'string',
      h6: 'string',
    },
  },
};
