# Grid

Tables and grids helpers.


## Main purpose
 
* components where you have two-dimension data presentation (tables, date-pickers etc)


## Usage

### Control navigation with `KitGridControlService`

Provide `KitGridControlService` at any component and add `[kitGridControl]` to element where you want to listen keyboard events.

```html
<div [kitGridControl]>
  ... grid elements
</div>
```

Inject `KitGridControlService` and subscribe to `actions`.

```typescript
constructor(private grid: KitGridControlService) {
  this.grid.actions.subscribe((action: KitGridControlActionType) => {
    ...
  });
}
```


## Examples

* [ngx-kit:datetime/KitDatePickerService sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/core/src/kit-datetime)
* [collection:date-picker demo](http://ngx-kit.com/collection/module/ui-date-picker)
