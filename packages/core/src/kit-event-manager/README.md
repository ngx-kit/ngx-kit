# Event-manager

Service for global events handling.


## Why

Angular `Renderer2` does not listen events with `useCapture` param.


## Example

Handle `esc` keydown globally:

```typescript
import { keyEscape, KitEventManagerService } from '@ngx-kit/core';
...
constructor(private em: KitEventManagerService) {
}
...
// subscribe
const escUnsub = this.em.listenGlobal('keydown', (event: KeyboardEvent) => {
  if (event.keyCode === keyEscape) {
    // do the job
  }
}, true);
...
// unsubscribe
escUnsub();
```  
