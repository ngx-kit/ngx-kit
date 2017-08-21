---
route: kit/alert
title: Closable alert
---

```html
<kit-alert [closable]="true" [(isOpen)]="closableDemoIsOpen">Closable message text</kit-alert>
<button *ngIf="!closableDemoIsOpen" [kitButton] (action)="closableDemoIsOpen = true">Reopen</button>
```

```typescript
closableDemoIsOpen = true;
```
