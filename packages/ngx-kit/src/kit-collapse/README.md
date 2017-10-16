# Collapse

## Main purpose
 
* accordion component
* collapsible menus

## Features

* handle state by services
* use structural directive (no render if template is not displayed)
* optional: multiple select
* optional: auto activation first item 
* optional: setup custom id for items

## Usage

For example you have `kit-menu`, `kit-section` component and want to collapse some div inside section.

* Provide `KitCollapseHostService` inside `kit-menu`
* Provide `KitCollapseItemService` inside `kit-section`
* Add `*kitCollapse` to collapsible div inside `kit-section` template or projection content
* Use `KitCollapseItemService` for set state of collapse:
  * `this.itemService.toggle()`
  * `this.itemService.active = true`

## Examples

* ui-base:accordion - [sources](https://github.com/ngx-kit/ui-base/tree/master/package/lib/kit-accordion), [demo](http://ngx-kit.com/ui-base/module/kit-accordion) 
