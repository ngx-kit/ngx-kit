---
route: kit/loading-bar
title: Default loading-bar
---

```html
<kit-loading-bar></kit-loading-bar>
```

```html
<kit-button (action)="start()">Start</kit-button>
<kit-button (action)="end()">End</kit-button>
```

```typescript
constructor(private loadingBarService: KitLoadingBarService) {
}

start() {
  this.loadingBarService.start('local');
}

end() {
  this.loadingBarService.end('local');
}
```
