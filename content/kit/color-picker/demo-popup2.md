---
route: kit/color-picker
title: Color-picker popup without ngModel
---

```html
<button [kitButton] [kitColorPickerPopup] [(kitColorPickerPopupColor)]="color">Pick a color</button>
<span>{{ color }}</span>
```
