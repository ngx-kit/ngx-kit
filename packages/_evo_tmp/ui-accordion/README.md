# Accordion component for Angular

## Installation

```
$ ng add @ngx-kit/ui-accordion
```

## Usage

```html
<ui-accordion>
  <ui-accordion-panel>
    <button uiAccordionTitle>...panel title...</button>
    <ui-accordion-content *kitCollapse>
      ...panel content...
    </ui-accordion-content>
  </ui-accordion-panel>
  <ui-accordion-panel>
    <button uiAccordionTitle>...panel title</button>
    <ui-accordion-content *kitCollapse>
      ...panel content...
    </ui-accordion-content>
  </ui-accordion-panel>
  ...
</ui-accordion>
```


## Options

### `ui-accordion`

* `activateFirst` — Automatically open first panel.
* `multiple` — Allow few panels open at a time.


## Theming

* `--ui-accordion-title-background`
* `--ui-accordion-title-border`
* `--ui-accordion-title-color`
* `--ui-accordion-title-padding`
* `--ui-accordion-title-hover-background`
* `--ui-accordion-title-outline`
* `--ui-accordion-content-padding`
