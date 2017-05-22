# @ngx-kit/icon

## Installation

`npm install @ngx-kit/core @ngx-kit/icon --save`

## Usage

### Import module

```typescript
import { KitCoreModule } from '@ngx-kit/core';
import { KitIconModule } from '@ngx-kit/icon';
..
@NgModule({
  imports: [
    KitCoreModule.forRoot(),
    KitIconModule.forRoot(),
...
```

Use import with `.forRoot()` only once on the top level. 
In other modules just import `KitIconModule`.

### Register icons

```typescript
import { KitIconRegistryService } from '@ngx-kit/icon';
...
constructor(private iconRegistry: KitIconRegistryService) {
  this.iconRegistry.register('star', '/assets/icons/star.svg');
  // or
  this.iconRegistry.registerSet([
      {name: 'star', url: '/assets/icons/star.svg'},
      {name: 'cloud', url: '/assets/icons/cloud.svg'},
  ]);
}
```

### Use in a template

```html
<kit-icon [name]="'star'"></kit-icon>
```

### API

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| **name** (required) | string | null | Name in the registry |
| *color* | string (any css color) | null | Svg fill color |
| *size* | number | 24 | Size in pixels | 