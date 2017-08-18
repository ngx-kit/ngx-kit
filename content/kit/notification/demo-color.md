---
route: kit/notification
title: Notification color
---

```html
<button [kitButton] [color]="'default'" (action)="openWithColor('default')">Message with default color</button>
<button [kitButton] [color]="'primary'" (action)="openWithColor('primary')">Message with primary color</button>
<button [kitButton] [color]="'info'" (action)="openWithColor('info')">Message with info color</button>
<button [kitButton] [color]="'success'" (action)="openWithColor('success')">Message with success color</button>
<button [kitButton] [color]="'warning'" (action)="openWithColor('warning')">Message with warning color</button>
<button [kitButton] [color]="'error'" (action)="openWithColor('error')">Message with error color</button>
```

```typescript
openWithColor(color: string) {
  this.notificationService.open({'message': 'Colored message', color});
}
```
