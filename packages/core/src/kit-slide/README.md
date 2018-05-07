# Slide

## Scope
 
* Carousel, image slider
* Tabs component


## Features

* Handle state by services
* Use structural directive (no render if template is not displayed)
* Handle animation state (direction)
* Rotate api


## Usage

Import `KitSlideModule`.

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


## Example

* collection:carousel - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-carousel), [demo](http://ngx-kit.com/collection/module/ui-carousel)
* collection:tabs - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-tabs), [demo](http://ngx-kit.com/collection/module/ui-tabs) 
