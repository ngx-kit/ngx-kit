---
route: kit/select
title: Default (native) select
---

```html
<kit-select [options]="options"
            [valueField]="'id'"
            [labelFiled]="'id'"
            [(ngModel)]="selected"></kit-select>
```

```typescript
options = [
  {id: '123'},
  {id: '456'},
  {id: '789'},
  {id: 'abc'},
];
selected = '123';
```
