---
route: kit/checkbox
title: Default accordion
---

```html
<kit-checkbox [(ngModel)]="checked">Checkbox</kit-checkbox>
<span *ngIf="checked">is checked</span>
```

```typescript
checked: boolean;
```
