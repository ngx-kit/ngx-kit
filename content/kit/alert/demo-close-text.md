---
route: kit/alert
title: Alert closing link text
---

```html
<kit-alert [closable]="true" [closeText]="'Close'" [(isOpen)]="closeTextDemoIsOpen">
  Closable message text with custom closing link text
</kit-alert>
<button *ngIf="!closeTextDemoIsOpen" [kitButton] (action)="closeTextDemoIsOpen = true">Reopen</button>
```

```typescript
closeTextDemoIsOpen = true;
```
