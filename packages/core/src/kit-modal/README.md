# Modal

## Main purpose
 
For modal dialogs are displayed in a layer is above of the page content.



## Usage

Core does not provide styling or structure for modal, only tools for controlling overlay, backdrop, nesting, a11y.

You can use Angular component composition and create any set of modals.


### Use `KitModalService`

```typescript
export class DemoComponent {
  private modalRef: KitModalRef<DemoModalComponent>;
  
  constructor(private modalService: KitModalService) {
  }
  
  showModal() {
    this.modalRef = this.modalService.show(DemoModalComponent);
  }
  
  closeModal() {
    this.modalRef.close();
  }
}
```

You can provide `KitModalRef` in `DemoModalComponent`:

```typescript
export class DemoModalComponent {
  constructor(private modalRef: KitModalRef<DemoModalComponent>) {
  }
  
  close() {
    this.modalRef.close();
  }
}
```

When `KitModalRef.close()` called it destroys component instance.


### Use `kit-modal` component

When modal hosted in template `KitModalRef.close()` just emit `(close)` event on the `kit-modal` component. Display state should be controlled by `*kitOverlay` directive:

```html
<button (click)="display = true">Show modal</button>
<kit-modal (close)="display = false">
  <demo-modal *kitOverlay="display"></demo-modal>
</kit-modal>
```



## Configuration

Available options:
  * `backdropClose` (default: `true`) - indicating if clicking the backdrop should close the modal.
  * `escClose` (default: `true`) - indicating if pressing the `esc` key should close the modal.
  * `scrollLock` (default: `true`) - indicating if scroll of body is disabled while modal is displayed.

Modal options can be passed by DI provider, `KitModelService.show()` method or with `kit-modal` params.

### Set params with the service

```typescript
this.modalService.show(DemoModalComponent, {backdropClose: false});
```

### Ser params with `kit-modal`

```html
<kit-modal [backdropClose]="false">
  ...
</kit-modal>
```

### Default config

If you want to redefine default options with DI you should define all options:

```typescript
providers: [
  {
    provide: kitModalDefaultOptions,
    useValue: {
      backdropClose: true,
      escClose: true,
      scrollLock: true,
    },
  },
],
```



## Data-binding

For service-hosted modals we have methods for communication with component instance.

#### input

```typescript
export class DemoModalComponent {
  @Input() field: string;
}
```

```typescript
this.modalRef = this.modalService.show(DemoModalComponent);
this.modalRef.input('field', 'value');
```

`input` method passes value to the defined field and calls `ngOnChanges` life-cycle hook (if needed).

#### output

```typescript
export class DemoModalComponent {
  @Output() event = new EventEmitter<any>();
}
```

```typescript
this.modalRef = this.modalService.show(DemoModalComponent);
this.modalRef.output('event').subscribe((value: any) => {
});
```

`output` provides `Observable` with subscription on event emitter.

As you can see `DemoModalComponent` can be used both in the service-hosted and in the template-hosted approach.

```html
<kit-modal>
  <demo-modal *kitOverlay="display"
              [field]=""
              (event)="">
  </demo-modal>
</kit-modal>
``` 



## Guards

### `canClose`

Handy for service-hosted modals when you don't have full control of closing process.

If `canClose` method returns `false` modal will not be destroyed.

```typescript
export class DemoModalComponent implements KitModalCanClose {
  canClose(): boolean {
  }
}
```


## Focus managment

Provide `KitFocusManagerService`

```typescript
export class DemoModalComponent {
  constructor(private focusManagerService: KitFocusManagerService) {
  }
}
```

### Trap

Capture focus:

```typescript
ngOnInit() {
  this.focusManagerService.autoCapture = true;
  this.focusManagerService.init();
}
```

### Initial focus

TBD



## Examples

* collection:modal - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-modal), [demo](https://ngx-kit.com/collection/module/ui-modal)
