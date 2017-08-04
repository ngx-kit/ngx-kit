---
route: kit/notification
title: Notification with title
---

```html
<button [kitButton] (action)="openTitled()">Open default</button>
```

```typescript
openTitled() {
  this.notificationService.open({message: 'Titled notification message', title: 'Message title'});
}
```
