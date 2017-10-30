# Overlay

## Main purpose
 
* dialogs
* popups
* tooltips


## Usage

Base step - add `<kit-overlay-host></kit-overlay-host>` to any high-level component (root is preferred). We use `position:fixed` but few things could brake proper functionality, for example css `transform`.

Any element/component could be projected.

```html
<div *kitOverlay="display">
  Some content
</div>
```

`*kitOverlay` - expects a boolean expression, like `*ngIf`.

### Positioning

If base example `<div>` just would be projected to `<kit-overlay-host>`. You can use css for positioning.

```html
<div *kitOverlay="display" style="position: fixed; top: 100px; left: 50%; transform: translateX(-50%)">
  Some content
</div>
```

Use `KitOverlayPositionService` for more advanced cases.

`kitOverlayPosition` just provides `KitOverlayPositionService` on element and pass params.

```html
<button #anchor>Dropdown toggle</button>
<div *kitOverlay="display" [kitOverlayPosition]="{type: 'dropdown', anchor: anchor}">
  <ul>
    <li>Item1</li>
    <li>Item2</li>
    <li>Item3</li>
  </ul>
</div>
```

Or provide `KitOverlayPositionService` on component. Also needs `KitStyleService` for applying styles.

```ts
@Component({
  selector: 'app-modal',
  providers: ['KitOverlayPositionService', 'KitStyleService'],
  ...
})
...
```

```html
<button (click)="display = true">Show modal</button>
<app-modal *kitOverlay="display">
  Modal content
</app-modal>
``` 


## Examples

* ui-base:custom-select - [sources](https://github.com/ngx-kit/ui-base/tree/master/src/lib/ui-custom-select), [demo](http://ngx-kit.com/ui-base/module/ui-custom-select) 
* ui-base:modal - [sources](https://github.com/ngx-kit/ui-base/tree/master/src/lib/ui-modal), [demo](http://ngx-kit.com/ui-base/module/ui-modal) 
* ui-base:tooltip - [sources](https://github.com/ngx-kit/ui-base/tree/master/src/lib/ui-tooltip), [demo](http://ngx-kit.com/ui-base/module/ui-tooltip) 
