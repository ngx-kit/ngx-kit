# @ngx-kit/forms

## Installation

`npm install @ngx-kit/core @ngx-kit/forms moment --save`

### Add moment script to `.angular-cli.json`

`"../node_modules/moment/moment.js",`

## Usage

```html
<kit-form-group>
  <kit-form-label>Testy</kit-form-label>
  <kit-input [formControl]="form.controls['testy']"></kit-input>
  <kit-form-error [validator]="'required'" [touched]="true">Yoohoo: You can't leave this empty.</kit-form-error>
  <kit-form-error [validator]="'email'" [touched]="true">Yoohoo: Email invalid.</kit-form-error>
</kit-form-group>
```
