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

* [ngx-kit:datetime/KitDatePickerService sources](https://github.com/ngx-kit/ngx-kit/blob/master/packages/ngx-kit/src/kit-datetime/kit-date-picker.service.ts)
* [ui-base:date-picker demo](http://ngx-kit.com/ui-base/module/ui-date-picker)
