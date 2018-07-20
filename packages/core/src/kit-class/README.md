Apply classes to an element.

### Why

1. Default Angular bindings (`[class.x]` and `[ngClass]`) do not allow to bind dynamic class-names based on `boolean`/`string` values.

2. `@HostBinding` can not provide `ngClass` functionality, if we want to bind classes from component.
