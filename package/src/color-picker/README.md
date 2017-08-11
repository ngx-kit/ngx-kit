# color-picker

## Demos

https://ngx-kit.com/kit/modules/color-picker

## API

### `<kit-color-picker>,[kitColorPicker]`

#### Inputs

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| *ngModel* | `string` | null | Color value model |
| *debounce* | `number` | null | Debounce before value output |
| *sbHeight* | `number` | `100` | Height of saturation-brightness field |
| *width* | `number` | `200` | Component width |

#### Outputs

| Event | Type | Description |
| --- | --- | --- |
| *ngModelChange* | `Event<string>` | Color value changing |

### `[kitColorPickerPopup]`

Directive automatically proxies value to host ngModel if needed.

#### Inputs

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| *kitColorPickerPopupColor* | `string` | null | Color value model |
| *kitColorPickerPopupColorDebounce* | `number` | null | Debounce before value output |

#### Outputs

| Event | Type | Description |
| --- | --- | --- |
| *kitColorPickerPopupColorChange* | `Event<string>` | Color value changing |
