# @ngx-kit/button

## Installation

`npm install @ngx-kit/button --save`

## Usage

### Import

```typescript
import { KitButtonModule } from '@ngx-kit/button';
..
@NgModule({
  imports: [
      KitButtonModule
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
| *type* | `primary`, `success`, `info`, `warning`, `error`, `link` | `primary` | Mainly color changing |
| *size* | `xs`, `s`, `m`, `l`, `xl` | `m` | Button size |
| *disabled* | boolean | false | In a disabled state does not raise click event |