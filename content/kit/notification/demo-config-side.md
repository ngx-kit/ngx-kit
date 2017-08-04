---
route: kit/notification
title: Config side
---

```html
<button [kitButton] (action)="setPositionAndOpen('top-right')">Set top-right and open</button>
<button [kitButton] (action)="setPositionAndOpen('bottom-right')">Set bottom-right and open</button>
<button [kitButton] (action)="setPositionAndOpen('bottom-left')">Set bottom-left and open</button>
<button [kitButton] (action)="setPositionAndOpen('top-left')">Set top-left and open</button>
```

```typescript
setPositionAndOpen(position: KitCoreOverlayContainerPositionCorner) {
  this.notificationService.config({position});
  this.notificationService.open({message: 'Sided message'});
}
```
