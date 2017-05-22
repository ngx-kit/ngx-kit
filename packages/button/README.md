# @ngx-kit/button

## Installation

`npm install @ngx-kit/button --save`

## Usage

### Import

```typescript
import { KitCoreModule } from '@ngx-kit/core';
import { KitButtonModule } from '@ngx-kit/button';
..
@NgModule({
  imports: [
      KitCoreModule.forRoot(),
      KitButtonModule,
...
```

Use import with `.forRoot()` only once on the top level.

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