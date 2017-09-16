---
title: Importing
apiOrder: 2
---

You can import all modules using `KitFullModule` or import only required modules.

## `KitFull*Module`

Import components to the root module of the application:

```typescript
import { KitFullForRootModule } from '@ngx-kit/ngx-kit';

@NgModule({
  ...
  imports: [
    ...
    KitFullForRootModule,
  ],
  ...
})
export class AppModule {
}
```

Import components in sub-modules:

```typescript
import { KitFullModule } from '@ngx-kit/ngx-kit';

@NgModule({
  ...
  imports: [
    ...
    KitFullModule,
  ],
  ...
})
export class AppSubModule {
}
```
