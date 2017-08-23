# auto-complete

## Demos

https://ngx-kit.com/kit/modules/auto-complete

## API

### `<kit-auto-complete>`

Implements `ControlValueAccessor`.

#### Inputs

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| *data* | `string[]` | `` | |
| *dataSourceFactory* | `KitDataSourceFactory` | `` | Function for receiving data `(input: string) => Observable<string[]>` |
| *debounce* | `number` | `500` | |
