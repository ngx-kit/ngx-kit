# Ref

## Main purpose

* Template projecting shortcut


## Usage

Pass templates through content:

```html
<span *kitRef>1</span>
<span *kitRef>2</span>
<span *kitRef>3</span>
```

Select refs:

```typescript
@ContentChildren(KitRefDirective) refs: QueryList<KitRefDirective>;
```

Output by `*ngTemplateOutlet`:

```html
<ng-container *ngFor="ref of refs">
  <ng-container *ngTemplateOutlet="ref.template">
</ng-container>
```


## Examples

* collection:breadcrumbs - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-breadcrumbs), [demo](http://ngx-kit.com/collection/module/ui-breadcrumbs)
