---
title: Introduction
apiPriority: 1
---

# Ngx-kit Collection

Set of Angular components based on ngx-kit and packed into Angular-cli schematics.

All 3rd-party ui-kits has their own limitations and overheads. But projects has own business and design goals, and often the best way to reach this goals - craft a component from a scratch.

The best interface for ui-components is a possibility to change the source code.

**@ngx-kit/collection** it is a set of prepared and simplified components. Just generate the code by Angular-cli into your project or kit and modify it if needed.


## Usage

Requirements:
* angular 6+
* angular-cli 6+

Install ngx-kit core and collection: 

```
ng add @ngx-kit/core
```
 
Generate code:

```
ng g @ngx-kit/collection:ui-button ui-button
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
<button uiButton>Hello!</button>
```
