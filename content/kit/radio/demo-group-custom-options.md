---
route: kit/radio
title: Radio group custom options
---

```html
<kit-radio-group [(ngModel)]="selected"
                 [options]="customOptions"
                 [valueField]="'customValue'"
                 [labelField]="'customLabel'">
</kit-radio-group>
```

```typescript
customOptions = [
  {customValue: 'first', customLabel: 'First'},
  {customValue: 'second', customLabel: 'Second'},
  {customValue: 'third', customLabel: 'Third'},
];
```
