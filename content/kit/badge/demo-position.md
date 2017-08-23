---
route: kit/badge
title: Badge position
---

```html
<kit-badge [count]="54" [position]="'inline'"></kit-badge>
<div [ngStyle]="{width: '50px', height: '50px', background: '#eee', margin: '16px', position: 'relative'}">
  <kit-badge [count]="55" [color]="'error'" [position]="'top-right'"></kit-badge>
  <kit-badge [count]="56" [color]="'warning'" [position]="'bottom-right'"></kit-badge>
  <kit-badge [count]="57" [color]="'success'" [position]="'bottom-left'"></kit-badge>
  <kit-badge [count]="58" [color]="'info'" [position]="'top-left'"></kit-badge>
</div>
```
