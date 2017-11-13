---
title: Overview
apiOrder: 1
---

# Ngx-kit Collection Overview

Set of Angular components based on ngx-kit and packed into Angular-cli schematics.

All 3rd-party ui-kits has their own limitations and overheads. But projects has own business and design goals, and often the best way to reach this goals - craft a component from a scratch.

The best interface for ui-components is a possibility to change the source code.

Ui-base is set of prepared and simplified components. Just generate the code by Angular-cli to your project or kit and modify it if needed.


## Usage

Requirements:
* angular 5+
* angular-cli 1.5+

Install ngx-kit core and collection: 

```
npm install @ngx-kit/core --save
npm install @ngx-kit/collection --save-dev
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
ng g ui-button -c=@ngx-kit/collection ui-button
```

Import generated module:

```typescript
@NgModule({
  ...
  imports: [
    ...
    UiButtonModule,
  ],
})
```

Use the component:

```html
<button [uiButton]>Hello!</button>
```
