---
title: Overview
apiOrder: 1
---

# Ngx-kit Core Overview

Low level components and services for creating Angular ui-components.

You don't need 3rd party ui-kit, just create your own components that do exactly what you want. 


## Features

* Set of modules for creating rich Angular applications 
* Collection of blueprints: [@ngx-kit/collection](https://ngx-kit.com/collection)
* Angular 5+ support
* AOT support
* Server-rendering support
* Free and open-source
* Setup via NPM


## Installation

```
npm install @ngx-kit/core --save
```

## Usage

Import `KitRootModule` and platform module (`KitPlatformBrowserModule` or `KitPlatformServerModule`) to the root module of your application.

```typescript
import { NgModule } from '@angular/core';
import { KitRootModule, KitPlatformBrowserModule } from '@ngx-kit/core';
...

@NgModule({
  imports: [
    ...
    KitRootModule,
    KitPlatformBrowserModule,
  ],
  ...
})
export class AppModule {
}
```

Import `KitModule` to any module where you need kit directives and components, even in the root module.

Add `<kit-overlay-host>` to the root component (imported by `KitModule`).


## Links

* [github](https://github.com/ngx-kit/ngx-kit)
