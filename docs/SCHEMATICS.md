---
title: Schematics
apiOrder: 4
---

# Angular-cli schematics

There are few custom blueprints for the fast entity generation. Created for ngx-kit and ui-base development.

## Installation

```
npm i @angular-devkit/core @angular-devkit/schematics --save-dev
npm i @ngx-kit/schematics --save-dev
```

Works only with `angular-cli@1.5.0-beta.4^`.

## Usage

* Component: `ng g kc -c=@ngx-kit/schematics PATH/NAME`
* Demo: `ng g kdm -c=@ngx-kit/schematics PATH/NAME`
* Module: `ng g km -c=@ngx-kit/schematics PATH/NAME`

Or update `.angular-cli.json` for run cmd without `-c` param:

```json
...
"defaults": {
  "schematics": {
    "collection": "@ngx-kit/schematics"
  },
  ...
}
```

## Cases

### Non `src/app` directory

Setup `appRoot` in `.angular-cli.json`. For example:

```
...
"apps": [
  {
    "name": "package",
    "root": "package",
    "appRoot": "src",
    ...
  },
```
