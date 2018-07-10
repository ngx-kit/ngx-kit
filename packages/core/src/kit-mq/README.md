# Mq

`MediaQuery` module.

Module uses `matchMedia` browser API, more info: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia


## Usage

Provide breakpoints in the root module:

```typescript
...
providers: [
  {
    provide: kitMqBreakpoints,
    useValue: {
      mobile: '320px',
      tablet: '740px',
      desktop: '980px',
      wide: '1300px',
    },
  },
],
```

Set of breakpoint a fully customizable. 


### `KitMqService`

Check or observe media query by the service:

```typescript
constructor(private mq: KitMqService) {
}
...
// Check
const matches = this.mq.check({from: 'mobile', until: 'tablet'});
...
// Observe
this.mq.observe({from: 'tablet'}).subscribe(matches => {
}); 
```


### `*kitMq` directive

Provide `KitMqModule` into a current module.

And use structural directive (works like `*ngIf`):

```html
<div *kitMq="{from: 'desktop'}">
  Displays on desktops and wider.
</div>
```
