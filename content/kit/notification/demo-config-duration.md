---
route: kit/notification
title: Config duration
---

```html
<button [kitButton] (action)="setDurationAndOpen(2000)">Set duration=2000 and open</button>
<button [kitButton] (action)="setDurationAndOpen(4000)">Set duration=4000 and open</button>
<button [kitButton] (action)="setDurationAndOpen(10000)">Set duration=10000 and open</button>
```

```typescript
setDurationAndOpen(duration: number) {
  this.notificationService.config({duration});
  this.notificationService.open({message: 'Just an another message'});
}
```
