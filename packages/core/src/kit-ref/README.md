# Ref

Template projecting shortcut.


## Usage

Pass templates through content:

```html
<app-my-component>
  <span *kitRef>1</span>
  <span *kitRef>2</span>
  <span *kitRef>3</span>
</app-my-component>
```

Select refs in `app-my-component`:

```typescript
@ContentChildren(KitRefDirective) refs: QueryList<KitRefDirective>;
```

Output by `*ngTemplateOutlet`:

```html
<ng-container *ngFor="ref of refs">
  <ng-container *ngTemplateOutlet="ref.template">
</ng-container>
```

### Parametrize

You can define any parameter to `kitRef` and then use it before rendering.

```html
<app-my-component>
  <span *kitRef="'main'">1</span>
  <span *kitRef="'main'">2</span>
  <span *kitRef="'secondary'">3</span>
  <span *kitRef="'secondary'">4</span>
</app-my-component>
```

Filter refs by param: 

```typescript
@ContentChildren(KitRefDirective) refs: QueryList<KitRefDirective>;

get main(): KitRefDirective[] {
  return this.refs.filter(i => i.param === 'main');
}
```

Render filtered refs:

```html
<ng-container *ngFor="ref of main">
  <ng-container *ngTemplateOutlet="ref.template">
</ng-container>
```


## Example

* collection:breadcrumbs - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-breadcrumbs), [demo](http://ngx-kit.com/collection/module/ui-breadcrumbs)
