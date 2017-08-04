---
route: kit/notification
title: Notification duration
---

```html
<button [kitButton] (action)="openWithSpecificDuration(2000)">Open with duration=2000</button>
<button [kitButton] (action)="openWithSpecificDuration(4000)">Open with duration=4000</button>
<button [kitButton] (action)="openWithSpecificDuration(10000)">Open with duration=10000</button>  
```

```typescript
openWithSpecificDuration(duration: number) {
  this.notificationService.open({message: `Message with specific duration=${duration}`, duration});
}
```
