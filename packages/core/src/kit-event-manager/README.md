# Event-manager

Services for events handling.


## Features

* Listen events with `useCapture` param.
* Working correctly with `platform-server`.


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
