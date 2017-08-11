---
route: kit/radio
title: Radio group options
---

```html
<kit-radio-group [(ngModel)]="selected" [options]="options"></kit-radio-group>
```

```typescript
selected = 'first';
options = [
  {value: 'first', label: 'First'},
  {value: 'second', label: 'Second'},
  {value: 'third', label: 'Third'},
];
```
