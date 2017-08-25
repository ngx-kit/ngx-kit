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
};
