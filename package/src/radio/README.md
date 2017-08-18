# radio

## Demos

https://ngx-kit.com/kit/modules/radio

## API

### `<kit-radio>,[kitRadio]`

#### Inputs

Implements `ControlValueAccessor`.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| *accesskey* | `string` | | Native attribute |
| *autofocus* | `boolean` | | Native attribute |
| *disabled* | `boolean` | | Disabled |
| *tabindex* | `number` | | Native attribute |
| *value* | `any` | | Radio value |

#### Outputs

Supports all native html events. 

### `<kit-radio-group>,[kitRadioGroup]`

Implements `ControlValueAccessor`.

#### Inputs

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| *options* | `any[]` | null | |
| *valueField* | `string` | `value` | |
| *labelField* | `string` | `label` | |
| *direction* | `horizontal,vertical` | `horizontal` | |

#### Outputs

| Event | Type | Description |
| --- | --- | --- |
