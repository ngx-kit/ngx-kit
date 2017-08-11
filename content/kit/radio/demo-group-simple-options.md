---
route: kit/radio
title: Radio group simple options
---

```html
<kit-radio-group [(ngModel)]="selected" [options]="simpleOptions"></kit-radio-group>
```

```typescript
selected = 'first';
simpleOptions = ['first', 'second', 'third'];
```
