# @ngx-kit/buttons

## Installation

`npm install @ngx-kit/buttons --save`

## Usage

### Import

```typescript
import { KitButtonsModule } from '@ngx-kit/buttons';
..
@NgModule({
  imports: [
      KitButtonsModule,
...
```

### Use in a template

```html
<kit-button>Button text</kit-button>
```

### API

Customize a button with input params:

```html
<kit-button [type]="'success'" [size]="'s'" ...></kit-button> 
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| *type* | string | in-theme | Mainly color changing |
| *size* | string | in-theme | Button size |
| *disabled* | boolean | false | In a disabled state does not raise click event |

Type and size can be different depends on a theme.

#### Default theme params

* type: `default`, `primary`, `success`, `warning`, `error`, `link`
* size: `xs`, `s`, `m`, `l`, `xl`
