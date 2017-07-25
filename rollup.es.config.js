const globals = require('./rollup_globals');

export default {
  entry: './dist/package/ngx-kit.js',
  dest: './dist/package/module/ngx-kit.js',
  format: 'es',
  exports: 'named',
  external: Object.keys(globals),
  globals,
  onwarn: function(warning) {
    // Suppress this error message... there are hundreds of them. Angular team says to ignore it.
    // https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    console.error(warning);
  }
};
