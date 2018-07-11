# Overlay

Service for hosting elements/components in a layer is above of the page content.

## Scope
 
* Modals
* Tooltips
* Dropdowns


## Usage

### Use `*kitOverlay` directive

Any element/component could be projected.

```html
<div *kitOverlay="display">
  Some content
</div>
```

`*kitOverlay` - expects a boolean expression, like `*ngIf`.

### Toggle

Instead of creating additional variable in a component and custom handler, you can handle click/hover by `kitOverlayToggle` directive.

`KitOverlayToggleDirective` also implements `KitAnchor` interface.

```html
<button kitOverlayToggle #toggle="toggle">Dropdown here</button>
<ui-dropdown *kitOverlay="toggle.state">
             ...
</ui-dropdown>
```


### Use `KitOverlayService`

```typescript
const ref = this.overlayService.hostComponent({component: DemoOverlayComponent});
```


### Data-binding

For service-hosted components we have methods for communication with component instance.

#### input

```typescript
export class OverlayComponent {
  @Input() field: string;
}
```

```typescript
const ref = this.overlayService.hostComponent({component: OverlayComponent});
ref.input({field: 'value'});
```

`input` method passes value to the defined field and calls `ngOnChanges` life-cycle hook (if needed).

#### output

```typescript
export class OverlayComponent {
  @Output() event = new EventEmitter<any>();
}
```

```typescript
const ref = this.overlayService.hostComponent({component: OverlayComponent});
ref.instance.event.subscribe((value: any) => {
});
```


### Host components in Lazy Modules

You could get error `No component factory found for NameOfComponent` inside Lazy Modules. To solve the problem just provide `KitOverlayService` in this module.



## Example

* collection:custom-select - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-custom-select), [demo](http://ngx-kit.com/collection/module/ui-custom-select) 
* collection:modal - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-modal), [demo](http://ngx-kit.com/collection/module/ui-modal) 
* collection:tooltip - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-tooltip), [demo](http://ngx-kit.com/collection/module/ui-tooltip) 
