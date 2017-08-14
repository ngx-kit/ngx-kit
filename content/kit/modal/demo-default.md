---
route: kit/modal
title: Default modal
---

```html
<kit-button [color]="'brand'" (click)="modal.opened = true">Open modal!</kit-button>
<kit-modal #modal>
  <div header>Modal header</div>
  <div content [style.width.px]="400">Modal content</div>
  <div footer>
    <kit-button (action)="modal.opened = false">Cancel</kit-button>
    <kit-button [color]="'primary'">Ok</kit-button>
  </div>
</kit-modal>
```
