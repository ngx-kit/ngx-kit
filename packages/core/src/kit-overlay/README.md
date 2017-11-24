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

In base example `<div>` just will be projected to `<kit-overlay-host>`. You can use css for positioning.

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

Or provide `KitOverlayPositionService` on a component. Also needs `KitStyleService` for applying styles.

```ts
@Component({
  selector: 'app-popup',
  providers: [
    KitOverlayPositionService, 
    KitStyleService,
  ],
  ...
})
export class AppPopupComponent {
  constructor(private overlayPosition: KitOverlayPositionService) {
  }
  
  ngOnChanges() {
    this.overlayPosition.type = 'side';
    this.overlayPosition.anchor = this.anchor;
    ...
  }
...
```

```html
<button (click)="display = true" #anchor>Show popup</button>
<app-popup *kitOverlay="display" [anchor]="anchor">
  Popup content
</app-popup>
``` 

#### `type`

* `dropdown`
* `side`

#### `position`

* `top`
* `bottom`
* `left`
* `right`
* `top-left`
* `top-right`
* `bottom-left`
* `bottom-right`
* `left-top`
* `left-bottom`
* `right-top`
* `right-bottom`


## Examples

* collection:custom-select - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-custom-select), [demo](http://ngx-kit.com/collection/module/ui-custom-select) 
* collection:modal - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-modal), [demo](http://ngx-kit.com/collection/module/ui-modal) 
* collection:tooltip - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-tooltip), [demo](http://ngx-kit.com/collection/module/ui-tooltip) 
