---
route: kit/auto-complete
title: Auto-complete factory
---

```html
<kit-auto-complete [dataSourceFactory]="dataSource"></kit-auto-complete>
```

`dataSourceFactory` shoud be an Observable:

```typescript
dataSource = (value: string) => {
  return Observable
      .from([['123', '123312', '456', 'abc', 'abccba', 'zxc', 'ghj']])
      .map(results => results.filter(r => r.indexOf(value) !== -1));
};
```

You could use this method for http-requests:

DEMO HERE
