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

* ui-base:button - [sources](https://github.com/ngx-kit/ui-base/tree/master/src/lib/ui-button), [demo](http://ngx-kit.com/ui-base/module/ui-button)
