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

* Angular ^5.0.0
* Angular-cli ^1.5.0


## Watch the video

https://www.youtube.com/watch?v=th9fhD1e3d4

Stackblitz demo: https://stackblitz.com/edit/ngx-kit-date-picker-demo


## Usage

#### Install the packages

```
npm i @ngx-kit/core --save
npm i @ngx-kit/collection @angular-devkit/core --save-dev
```

#### Import core modules

```typescript
import { KitRootModule, KitModule, KitPlatformBrowserModule } from '@ngx-kit/core';

@NgModule({
  ...
  imports: [
    ...
    KitRootModule,
    KitModule,
    KitPlatformBrowserModule,
```

#### Generate via Angular CLI

Pick a module from [Collection](https://ngx-kit.com/collection) and put the code to your project.

Button for example:

```
ng g ui-button -c=@ngx-kit/collection my-button
```

#### Import generated module

```typescript
@NgModule({
  ...
  imports: [
    ...
    MyButtonModule,
```

#### Use component

```html
<button myButton color="primary">Let's do it!</button>
```

#### Modify by your requirements

Only complex (but stable) logic is stored in [Core](https://ngx-kit.com/core), so you can change generated templates and styles in any way.


## License

MIT
