# Angular Button Component

## Installation

```
$ ng add @ngx-kit/evo
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
  <button uiButton evoCheck [(ngModel)]="radioModel" [value]="1">Radio button 1</button>
  <button uiButton evoCheck [(ngModel)]="radioModel" [value]="2">Radio button 2</button>
  <button uiButton evoCheck [(ngModel)]="radioModel" [value]="3">Radio button 3</button>
</ui-button-group>
```

Multiple:

```html
<ui-button-group>
  <button uiButton evoCheck [(ngModel)]="checkboxModel1">Checkbox button 1</button>
  <button uiButton evoCheck [(ngModel)]="checkboxModel2">Checkbox button 2</button>
  <button uiButton evoCheck [(ngModel)]="checkboxModel3">Checkbox button 3</button>
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
