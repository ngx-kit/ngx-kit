# Forms

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

* collection:button - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-button), [demo](http://ngx-kit.com/collection/module/ui-button)
