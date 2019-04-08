# Button component for Angular

## Installation

```
$ ng add @ngx-kit/ui-button
```


## Usage

```html
<button uiButton>Click!</button>
<button uiButton color="primary">Primary color</button>
<button uiButton size="l">Large size</button>
<button uiButton icon="star">With icon</button>
```

#### Groups

```html
<ui-button-group>
  <button uiButton>Grouped 1</button>
  <button uiButton>Grouped 2</button>
  <button uiButton>Grouped 3</button>
</ui-button-group>

<ui-button-group direction="column">
    <button uiButton>Vert Grouped 1</button>
    <button uiButton>Vert Grouped 2</button>
    <button uiButton>Vert Grouped 3</button>
</ui-button-group>
```

Selectable:

```html
<ui-button-group>
  <button uiButton kitCheck [(ngModel)]="radioModel" [value]="1">Radio button 1</button>
  <button uiButton kitCheck [(ngModel)]="radioModel" [value]="2">Radio button 2</button>
  <button uiButton kitCheck [(ngModel)]="radioModel" [value]="3">Radio button 3</button>
</ui-button-group>
```

Multiple:

```html
<ui-button-group>
  <button uiButton kitCheck [(ngModel)]="checkboxModel1">Checkbox button 1</button>
  <button uiButton kitCheck [(ngModel)]="checkboxModel2">Checkbox button 2</button>
  <button uiButton kitCheck [(ngModel)]="checkboxModel3">Checkbox button 3</button>
</ui-button-group>
```


## Options

### `ui-button, [uiButton]`

* `color`
* `disabled`
* `size`
* `icon`

### `ui-button-group`

* `direction`


## Theming

```
--ui-button-border-radius
// Default color
--ui-button-color-default-background
--ui-button-color-default-color
--ui-button-color-default-hover-background
--ui-button-color-default-hover-color
--ui-button-color-default-focus-box-shadow
--ui-button-color-default-focus-outline
--ui-button-color-default-focus-outline-offset
--ui-button-color-default-checked-background
--ui-button-color-default-checked-color
// Primary color
--ui-button-color-primary-background
--ui-button-color-primary-color
--ui-button-color-primary-hover-background
--ui-button-color-primary-hover-color
--ui-button-color-primary-focus-box-shadow
--ui-button-color-primary-focus-outline
--ui-button-color-primary-focus-outline-offset
--ui-button-color-primary-checked-background
--ui-button-color-primary-checked-color
// Ghost color
--ui-button-color-ghost-background
--ui-button-color-ghost-color
--ui-button-color-ghost-hover-background
--ui-button-color-ghost-hover-color
--ui-button-color-ghost-focus-box-shadow
--ui-button-color-ghost-focus-outline
--ui-button-color-ghost-focus-outline-offset
--ui-button-color-ghost-checked-background
--ui-button-color-ghost-checked-color
// S size
--ui-button-size-s-font-size
--ui-button-size-s-padding
// M size
--ui-button-size-m-font-size
--ui-button-size-m-padding
// L size
--ui-button-size-l-font-size
--ui-button-size-l-padding
```
