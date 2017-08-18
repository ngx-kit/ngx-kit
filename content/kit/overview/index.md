---
route: kit/overview
title: Overview
---

## Features

* Wide set of Angular UI components
* CSSinJS styling (fallback to classes)
* [Default-theme online customizer](/theme-editor)
* AOT-support
* `platform-server` support
* Free and open-source
* Setup via NPM

## Installation

Install dependencies:

`npm install @ngx-kit/styler @ngx-kit/ngx-kit moment --save`

Import components to the root module of the application:

```typescript
import { KitFullForRootModule } from '@ngx-kit/ngx-kit';

@NgModule({
  ...
  imports: [
    ...
    KitFullForRootModule,
  ],
  ...
})
export class AppModule {
}
```

Add `moment` to `.angular-cli.json`:

```json
...
"scripts": [
  "../node_modules/moment/moment.js"
],
```

[More info about importing](/utils/importer)

## Usage

For example date-picker:

```html
<kit-date-picker [ngModel]="date"></kit-date-picker>
```

## Links

* [github](https://github.com/ngx-kit)
* [discord](https://discord.gg/66Tt9WT)
