# Intersection

`IntersectionObserver` module.

Module uses Intersection Observer API, more info: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


## Usage

### `KitIntersectionService`

Provide `KitIntersectionService` on a component or a directive, that you want to observe.

```typescript
@Component({
  ...
  providers: [
    KitIntersectionService,
  ],
})
export class TestComponent {
  constructor(private intersection: KitIntersectionService) {
  }
  ...
  // Check
  const visible = this.instersection.isIntersecting;
  ...
  // Observe
  this.instersection.observe().subscribe(isIntersecting => {
  });
}
```

### `kitIntersection` directive

Provide `KitIntersectionModule` into a current module.

And listen to intersection changes:

```html
<div (kitIntersection)="visible = $event">
</div>
```
