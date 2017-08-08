---
route: kit/select
title: Complex params
---

```html
<kit-select [options]="objOptions"
            [valueField]="'id'"
            [labelFiled]="'id'"
            [(ngModel)]="selected"></kit-select>
```

```typescript
objOptions = [
  {
    id: '123',
    text: '123-label',
  },
  {
    id: '456',
    text: '456-label',
  },
  {
    id: '789',
    text: '789-label',
  },
  {
    id: 'abc',
    text: 'abc-label',
  },
];
selected = '123';
```
