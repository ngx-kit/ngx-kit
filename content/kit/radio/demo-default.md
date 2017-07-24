---
route: kit/radio
title: Default radio
---

```html
<kit-radio [value]="'first'" [(ngModel)]="selected">First</kit-radio>
<kit-radio [value]="'second'" [(ngModel)]="selected">Second</kit-radio>
<kit-radio [value]="'third'" [(ngModel)]="selected">Third</kit-radio>
<div>{{ selected }}</div>
```

```typescript
selected = 'first';
```
