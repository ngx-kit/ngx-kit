# Angular module for managing and including SVG icons

Icons registry and component for svg icons. 


### Usage

Add icons to the registry:

```typescript
// add one icon (define url)
this.iconsRegistry.add({name: 'star', url: '/assets/icons/star.svg'});
// or define xml
this.iconsRegistry.add({name: 'cloud', xml: '<svg xmlns="http://www.w3.org/2000/svg" ...'});

// or a set of icons
this.iconsRegistry.add([
  {name: 'star', url: '/assets/icons/star.svg'},
  {name: 'cloud', xml: '<svg xmlns="http://www.w3.org/2000/svg" ...'},
]);
```

And then insert an icon:
```html
<kit-icon name="star"></kit-icon>
```

#### Size

By default icons have `1em` height and proper shift to looking nice in a text line.

Also you can define any size:

```html
// One value for width and height
<kit-icon name="star" size="40px"></kit-icon>

// Separated values for width and height
<kit-icon name="cloud" [size]="['80px', '40px']"></kit-icon>
```

#### Color

By defaul fill color is `currentcolor` (use the text-color of parent element).

You can define fill color:

```html
<kit-icon name="star" color="#ff0000"></kit-icon>
```

#### A11y

Use `title` and `desc` properties to add `<title>` and `<desc>` elements into `<svg>`. Also binds `aria-labeledby` attribute that points to the elements.


#### Intersection load

Icon can load and render only after viewport intersection, set `intersectionLoad` param to `true`.


#### Server-rendering

Do not forget to define full url-path to files:

```typescript
this.iconsRegistry.add([
  {name: 'search', url: `${environment.assetsUrl}/icons/search.svg`},
  ...
]);
```
