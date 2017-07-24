---
route: kit/breadcrumb
title: Default breadcrumb
---

```html
<kit-breadcrumb [items]="items" [delimiter]="'/'"></kit-breadcrumb>
```

```typescript
items: KitBreadcrumbItem[] = [
  {title: 'Root', link: ['/']},
  {title: 'Child', link: ['/']},
  {title: 'Childy', link: ['/']},
];
```
