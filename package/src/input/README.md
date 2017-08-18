# input

## Demos

https://ngx-kit.com/kit/modules/input

## API

### `<kit-input>`

Implements `ControlValueAccessor`.

#### Inputs

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| *accesskey* | `string` | | Native attribute |
| *autocomplete* | `boolean` | | Native attribute |
| *autofocus* | `boolean` | | Native attribute |
| *disabled* | `boolean` | | Disabled |
| *maxlength* | `number` | | Native attribute |
| *placeholder* | `string` | | Native attribute |
| *readonly* | `boolean` | | Native attribute |
| *tabindex* | `number` | | Native attribute |
| *type* | `text, password, number, color, date, time, search, month, week, math` | `text` | Type |

Extra type `math`: automatically parse and evaluate basic math expressions.

#### Outputs

Supports all native html events. 
