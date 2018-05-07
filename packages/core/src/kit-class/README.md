# Class

Apply classes to an element.


## Why

1. Default Angular bindings (`[class.x]` and `[ngClass]`) do not allow to bind dynamic class-names based on `boolean`/`string` values.

2. `@HostBinding` can not provide `ngClass` functionality, if we want to bind classes from component.


## Usage

1. Import `KitClassModule`

### Directive

2. Bind `[kitClass]` to an element:

```html
<div [kitClass]="{color: 'red', active: true, primary: false}">
<!--<div class="color-red active">-->
``` 

### Service

2. Provide `KitClassService` in a component:

```typescript
@Component({
  ... 
  providers: [KitClassService],
})
export class MyComponent {
  constructor(private kitClass: KitClassService) {}
  ...
  this.kitClass.apply({color: 'red', active: true, primary: false});
}
```

## Example

* collection:button - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-button), [demo](http://ngx-kit.com/collection/module/ui-button)
