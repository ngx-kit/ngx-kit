export default {
  entry: 'dist/index.js',
  dest: 'dist/bundle/ngx-kit-core.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ngx-kit-core',
  globals: {
    'typescript': 'ts'
  }
};
