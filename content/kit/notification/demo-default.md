---
route: kit/notification
title: Default notification
---

```html
<button [kitButton] (action)="openDefault()">Open default</button>
```

```typescript
openDefault() {
  this.notificationService.open({message: 'Notification message'});
}
```
