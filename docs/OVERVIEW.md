---
title: Overview
apiOrder: 1
---

# @ngx-kit/ui-base overview

Set of Angular components based on ngx-kit and packed into Angular-cli schematics.

All 3rd-party ui-kit has their own limitations and overheads. But projects has own business and design goals, and often the best way to reach this goals - craft a component from scratch.

The best interface for ui-components is possibility to change the source code.

Ui-base is set of prepared and simplified components. Just generate code by Angular-cli to your project or kit and modify it if needed.


## Usage

Works only with Angular-cli.

Install ngx-kit core and ui-base schematics: 

```
npm install @ngx-kit/ngx-kit @ngx-kit/styler --save
npm install @ngx-kit/ui-base --save-dev
```

Import ngx-kit to the root module:

```typescript
@NgModule({
  ...
  imports: [
    ...
    KitFullForRootModule,
```
 
Generate code:

```
ng g ui-button -c=@ngx-kit/ui-base [name]
```

Don't forget to import generated module to module where you need it.  


## Links

* [github](https://github.com/ngx-kit/ui-base)
