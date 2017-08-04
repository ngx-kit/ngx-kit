---
route: kit/notification
title: Notification color
---

```html
<button [kitButton] (action)="openWithColor('default')">Message with default color</button>
<button [kitButton] (action)="openWithColor('primary')">Message with primary color</button>
<button [kitButton] (action)="openWithColor('success')">Message with success color</button>
<button [kitButton] (action)="openWithColor('warning')">Message with warning color</button>
<button [kitButton] (action)="openWithColor('error')">Message with error color</button>
```

```typescript
openWithColor(color: string) {
  this.notificationService.open({'message': 'Colored message', color});
}
```
