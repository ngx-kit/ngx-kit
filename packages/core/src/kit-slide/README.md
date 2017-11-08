# Slide

## Main purpose
 
* carousel, image slider
* tabs component

## Features

* handle state by services
* use structural directive (no render if template is not displayed)
* handle animation state (direction)
* rotate api

## Usage

Provide `KitSlideHostService` on a component and add `*kitSlide` to slides.

```html
<div (click)="rotate()">
  <div *kitSlide>Slide 1</div>
  <div *kitSlide>Slide 2</div>
  <div *kitSlide>Slide 3</div>
</div>
``` 

Use `KitSlideHostService` for state changing.

```typescript
providers[KitSlideHostService],
...
constructor(private slideHost: KitSlideHostService) {
}
...
rotate() {
  this.slideHost.rotate();
}
``` 

## Examples

* ui-base:carousel - [sources](https://github.com/ngx-kit/ui-base/tree/master/src/lib/ui-carousel), [demo](http://ngx-kit.com/ui-base/module/ui-carousel)
* ui-base:tabs - [sources](https://github.com/ngx-kit/ui-base/tree/master/src/lib/ui-tabs), [demo](http://ngx-kit.com/ui-base/module/ui-tabs) 
