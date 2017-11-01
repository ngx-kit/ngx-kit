# Forms

## Main purpose
 
* forms
* forms
* forms & inputs

There are few different features and all for forms.


## Input middleware

Goal is to intercept a value between html-element and `ngModel`(`VALUE_ACCESSOR`).

* `KitLimitMiddleware` - controls max length of entered string
* `KitMathParseMiddleware` - parse and calc entered value like math expression

At first provide `KitMiddlewareManager` and middleware on the directive/component that will be hosted on input.

```typescript
@Component({
  selector: 'textarea[uiTextarea]',
  providers: [
    KitMiddlewareManager,
    {
      provide: kitInputMiddleware,
      useClass: KitLimitMiddleware,
      multi: true,
    },
  ],
  ...
}
```

Then use `KitMiddlewareManager` for setup middleware params.

```typescript
export class UiTextareaComponent implements OnChanges {
  @Input() limit: number;

  constructor(private mw: KitMiddlewareManager) {
  }

  ngOnChanges() {
    this.mw.update(KitLimitMiddleware, {
      enabled: !!this.limit,
      limit: this.limit,
    });
  }
}
```

### Examples

* ui-base:input - [sources](https://github.com/ngx-kit/ui-base/tree/master/src/lib/ui-input), [demo](http://ngx-kit.com/ui-base/module/ui-input) 
* ui-base:textarea - [sources](https://github.com/ngx-kit/ui-base/tree/master/src/lib/ui-textarea), [demo](http://ngx-kit.com/ui-base/module/ui-textarea) 


## `KitCheck`

Adds to any element ValueAccessor and checkbox/radio behavior.
 
When is checked - adds class "checked" to the element.
 
For a value changing the directive listen click event.

Checkboxes behavior:

```html
<button [kitCheck] [(ngModel)]="buttonModel1">Checkbox button 1</button>
<button [kitCheck] [(ngModel)]="buttonModel2">Checkbox button 2</button>
<button [kitCheck] [(ngModel)]="buttonModel3">Checkbox button 3</button>
```

Radio behavior:

```html
<button [kitCheck] [(ngModel)]="buttonModel" [value]="1">Radio button 1</button>
<button [kitCheck] [(ngModel)]="buttonModel" [value]="2">Radio button 2</button>
<button [kitCheck] [(ngModel)]="buttonModel" [value]="3">Radio button 3</button>
```

### Examples

* ui-base:button - [sources](https://github.com/ngx-kit/ui-base/tree/master/src/lib/ui-button), [demo](http://ngx-kit.com/ui-base/module/ui-button)
