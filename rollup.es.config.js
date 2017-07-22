const globals = {
  "typescript": "ts",
  "@angular/animations": "ng.animations",
  "@angular/core": "ng.core",
  "@angular/common": "ng.common",
  "@angular/http": "ng.http",
  "@angular/forms": "ng.forms",
  "@angular/platform-browser": "ng.platform-browser",
  "@angular/platform-browser/animations": "ng.platform-browser.animations",
  "@angular/router": "ng.router",
  "@ngx-kit/styler": "styler",
  "rxjs/add/observable/combineLatest": "Rx.add",
  "rxjs/add/observable/of": "Rx.add",
  "rxjs/add/operator/do": "Rx.add",
  "rxjs/add/operator/debounceTime": "Rx.add",
  "rxjs/add/operator/distinctUntilChanged": "Rx.add",
  "rxjs/add/operator/filter": "Rx.add",
  "rxjs/add/operator/map": "Rx.add",
  "rxjs/add/operator/switchMap": "Rx.add",
  "rxjs/Observable": "Rx",
  "rxjs/Subject": "Rx"
};

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
