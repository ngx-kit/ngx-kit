[![CircleCI](https://circleci.com/gh/ngx-kit/ngx-kit.svg?style=svg)](https://circleci.com/gh/ngx-kit/ngx-kit)
[![npm version](https://badge.fury.io/js/%40ngx-kit%2Fcore.svg)](https://www.npmjs.com/@ngx-kit/core)

# [ngx-kit](https://ngx-kit.com)

Boost your Angular development!

Components customizing should be simple. Just generate components from ngx-kit collection and modify them as you like.

<p align="center">
  <a href="https://ngx-kit.com"><img src="./website/assets/ngx-kit-192.png" alt="ngx-kit logo"></a>
</p>

## Packages

* [@ngx-kit/core](https://ngx-kit.com/core) — low level services and directives for hiding complex logic.
* [@ngx-kit/collection](https://ngx-kit.com/collection) — set of components based on ngx-kit core and packed into Angular-cli schematics.


## Features

* AOT support
* Server-rendering support
* OnPush strategy support


## Requirements

* Angular 7
* Angular-cli 7

## Usage

![](./website/assets/demo.gif)

#### Add ngx-kit to your project

```
ng add @ngx-kit/core
```

#### Generate UI module

Pick a module from [Collection](https://ngx-kit.com/collection) and put the code to your project.

A button for example:

```
ng g @ngx-kit/collection:ui-button ui-button
```

#### Import generated module

```typescript
@NgModule({
  ...
  imports: [
    ...
    UiButtonModule,
```

#### Use component

```html
<button uiButton color="primary">Let's do it!</button>
```

#### Modify by your requirements

Only complex (but stable) logic is stored in [Core](https://ngx-kit.com/core), so you can change generated templates and styles in any way.


### Hammerjs

Some collection modules use Hammer.js. 

For proper working:

1. Install `npm i hammerjs --save`

2. Import `import 'hammerjs';` in `main.ts`.


## License

MIT
