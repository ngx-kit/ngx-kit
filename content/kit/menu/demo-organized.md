---
route: kit/menu
title: Organized menu
---

```html
<kit-menu [direction]="'vertical'" [style.width.px]="150">
  <kit-menu-group>
    <span title>Group 1</span>
    <kit-menu-item>Item 1</kit-menu-item>
    <kit-menu-item>
      Item 2 >
      <kit-menu-sub>
        <kit-menu-group>
          <span title>Sub group 1</span>
          <kit-menu-item>Sub item 1</kit-menu-item>
          <kit-menu-item>Sub item 2</kit-menu-item>
        </kit-menu-group>
        <kit-menu-separator></kit-menu-separator>
        <kit-menu-group>
          <span title>Sub group 2</span>
          <kit-menu-item>Sub item 1</kit-menu-item>
          <kit-menu-item>Sub item 2</kit-menu-item>
        </kit-menu-group>
      </kit-menu-sub>
    </kit-menu-item>
    <kit-menu-item>Item 3</kit-menu-item>
  </kit-menu-group>
  <kit-menu-group>
    <span title>Group 2</span>
    <kit-menu-item>Item 1</kit-menu-item>
    <kit-menu-item>Item 2</kit-menu-item>
    <kit-menu-separator></kit-menu-separator>
    <kit-menu-item>Item 3</kit-menu-item>
  </kit-menu-group>
</kit-menu>
```
