# Keymap

Directive and service for control components with keyboard.


## Main purpose
 
* any component where you need keyboard navigation/control.


## Usage

Provide `KitKeymapService` at component and add `[kitKeymap]` to element where you want to listen keyboard events.

Provide actions mapping:
 
```typescript
...
[
  KitKeymapService,
  {
    provide: KitKeymapActions,
    useClass: CmpNavMapping,
  },
  ...
]
```

```typescript
@Injectable()
export class CmpNavMapping extends KitKeymapActions {
  keydown(): KitKeymapAction[] {
      return [
        {
          key: keyEnter,
          action: 1,
        },
        {
          key: keyEnter,
          meta: {alt: true},
          action: 2,
        },
        ...
      ];
    }
}
```

Inject `KitKeymapService` and subscribe to `actions`.

```typescript
constructor(private service: KitKeymapService) {
  this.service.actions.subscribe((action: any) => {
    ...
  });
}
```


## Examples

* [ngx-kit:date-picker sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/core/src/kit-date-picker)
* [collection:date-picker demo](http://ngx-kit.com/collection/module/ui-date-picker)
