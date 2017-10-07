---
title: CLI
apiOrder: 3
---

# Command line interface

## Installation

`npm i @ngx-kit/cli -g`

## Commands

### get

`ngx-kit get PACKAGE:MODULE DEST`

Copied module source-code to DEST dir. Useful for work with ui-base package for fast building your own collection of components. 

### copy

`ngx-kit copy`

Uses `.ngx-kit.json` configuration for copying source or dist files. Used for copying files during development.

### gen-docs

`ngx-kit gen-docs PACKAGE`

Uses `.docs-schema.json` configuration for generating meta file that contains all package modules with demos, parsed docs and api.

## Config files

### `.ngx-kit.json`

#### example

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
  }
}
```

You can create `.ngx-kit.env.json` file that will be automatically merged in `.ngx-kit.json`.

Do not forget to add env file to `.gitignore`.

#### `.ngx-kit.env.json` example

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

### `.docs-schema.json`

#### example

```json
{
  "demo": "./src/app/package/demo",
  "docs": "./docs",
  "src": "./src/app/package/lib"
}
```
