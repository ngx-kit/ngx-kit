# Focus-manager

Control focus like a boss.


## Scope
 
* dialogs/popups/modals
* complex forms and components


## Usage

Provide `KitFocusManagerService` on component.

### Focus element

Add directive and set id to an element.

```html
<input kitFocus="start">
```

Focus element by `id`

```typescript
this.focusManager.focusItem('start');
```


### Focus trap

Great tool for improve accessibility of components. Keep focus inside component that provide `KitFocusManagerService`.

Inject and init service with `autoCapture`.

```typescript
providers: [KitFocusManagerService],
...
constructor(private focusManager: KitFocusManagerService) {
  this.focusManager.autoCapture = true;
  this.focusManager.init();
}
```

Or add via `kitFocusTrap` directive:

```html
<modal kitFocusTrap></modal>
```


## Example

* collection:date-picker - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-date-picker), [demo](https://ngx-kit.com/collection/module/ui-date-picker)
