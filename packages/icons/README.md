# @ngx-kit/icon

## Installation

`npm install @ngx-kit/icons --save`

## Usage

### Import module

```typescript
import { KitIconsModule } from '@ngx-kit/icons';
..
@NgModule({
  imports: [
    KitIconsModule.forRoot(),
...
```

Use import with `.forRoot()` only once on the top level. 
In other modules just import `KitIconsModule`.

### Register icons

```typescript
import { KitIconsRegistryService } from '@ngx-kit/icons';
...
constructor(private iconsRegistry: KitIconsRegistryService) {
  this.iconsRegistry.register('star', '/assets/icons/star.svg');
  // or
  this.iconsRegistry.registerSet([
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
