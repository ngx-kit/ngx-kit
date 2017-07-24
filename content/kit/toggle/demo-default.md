---
route: kit/toggle
title: Default toggle
---

```html
<kit-toggle [(ngModel)]="checked">Toggle</kit-toggle>
<span *ngIf="checked">is checked</span>
```

```typescript
checked: boolean;
```
