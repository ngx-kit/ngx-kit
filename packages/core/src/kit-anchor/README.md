# Anchor

Returns a reference to `elementRef` of any element.


## Why

If you define a template reference on the element that Angular views as a host element of the component, you will get a reference to the component instance.

`kitAnchor` resolves the problem.


## Scope

* Popups positioning


## Usage

1. Import `KitAnchorModule`

2. Use in template:

```html
<any-component kitAnchor #anchor="kitAnchor"></any-component>
<some-other-component [anchor]="anchor"></some-other-component>
```

3. Get `elementRef` from anchor:

```typescipt
@Input() anchor: KitAnchorDirective;
... 
const anchorElementRef = this.anchor.elementRef;
```

Or native html-element:

```typescript
const el = this.anchor.nativeEl;
```


## Example

* collection:date-picker - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-date-picker), [demo](http://ngx-kit.com/collection/module/ui-date-picker)
