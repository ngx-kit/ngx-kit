# radio

## Demos

https://ngx-kit.com/kit/modules/radio

## API

### `<kit-radio>,[kitRadio]`

#### Inputs

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| *ngModel* | `any` | null | Radio value model |

#### Outputs

| Event | Type | Description |
| --- | --- | --- |
| *ngModelChange* | `Event<any>` | Radio value changing |

### `<kit-radio-group>,[kitRadioGroup]`

#### Inputs

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| *ngModel* | `any` | null | Radio value model |
| *options* | `any[]` | null | |
| *valueField* | `string` | `value` | |
| *labelField* | `string` | `label` | |
| *direction* | `horizontal,vertical` | `horizontal` | |

#### Outputs

| Event | Type | Description |
| --- | --- | --- |
| *ngModelChange* | `Event<any>` | Radio value changing |
