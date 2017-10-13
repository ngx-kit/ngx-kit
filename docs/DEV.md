---
title: Dev
apiOrder: 99
---

# Dev

Information for ngx-kit developers.

## ngx-kit cli

### Installation

`npm i @ngx-kit/cli -g`

### Commands

#### copy

```
ngx-kit copy
```

Uses `.ngx-kit.json` configuration for copying source or dist files. Used for copying files during development.

#### gen-docs

```
ngx-kit gen-docs [path]
```

Uses `.docs-schema.json` configuration for generating meta file that contains all package modules with demos, parsed docs and api.

#### schematize

```
ngx-kit schematize
```

Convert ui-modules (like in @ngx-kit/ui-base) to schematics. Uses `.docs-schema.json` configuration.

### Config files

#### `.ngx-kit.json`

```json
{
  "copy": {
    "release": {
      "from": [],
      "to": []
    },
    "src": {
      "from": [
        "./src/app/package/",
        "./docs",
        "./.docs-schema.json"
      ],
      "to": []
    }
  },
  "schematics": {
    "src": "./src/lib",
    "template": "./package/_template",
    "dist": "./package"
  }
}
```

You can create `.ngx-kit.env.json` file that will be automatically merged in `.ngx-kit.json`.

Do not forget to add env file to `.gitignore`.

`.ngx-kit.env.json` example:

```json
{
  "copy": {
    "src": {
      "to": [
        "D://ngx-kit/website/node_modules/ui-base-src"
      ]
    }
  }
}
```

#### `.docs-schema.json`

```json
{
  "demo": "./src/app/package/demo",
  "docs": "./docs",
  "src": "./src/app/package/lib"
}
```


## Angular-cli schematics

There are few custom blueprints for the fast entity generation. Created for ngx-kit and ui-base development.

### Installation

```
npm i @angular-devkit/core @angular-devkit/schematics --save-dev
npm i @ngx-kit/schematics --save-dev
```

Works only with `angular-cli@1.5.0-beta.4^`.

### Usage

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

### Cases

#### Non `src/app` directory

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