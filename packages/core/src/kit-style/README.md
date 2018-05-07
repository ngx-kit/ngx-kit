# Style

Service that works exactly like `ngStyle`, but can be provided on a component or directive.


## Why

In a cases when we need to bind from a component, but `@HostBinding` has limited functionallity.


## Usage

1. Provide and inject `KitStyleService` in a component:

```typescript
@Component({
  ...
  providers: [KitStyleService],
})
export class MyCompoent {
  constructor(private style: KitStyleService) {
  }
}
```

2. Apply styles:

```typescript
this.style.style = {
 background: 'red',
 color: '#fff',
};
```
