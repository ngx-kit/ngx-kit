---
route: kit/select
title: Default (native) select
---

```html
<kit-select [options]="options"
            [(ngModel)]="selected"></kit-select>
```

```typescript
options = ['123', '456', '789', 'abc'];
selected = '123';
```
