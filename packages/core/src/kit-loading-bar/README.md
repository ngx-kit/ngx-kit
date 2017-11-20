# Loading-bar

Service for providing loading state.


## Main purpose

* Loading bar
* Global loading spinner


## Usage

Import `KitLoadingBarModule.forRoot()` or `KitFullForRoot`.

Provide `KitLoadingBarService` and subscribe on state changes:

```typescript
constructor(private service: KitLoadingBarService) {
}

ngOnInit() {
  this.service.barStateChanges
      .subscribe(s => {
        this.barState = s;
      });
}
```

State changes on `NavigationStart` and `NavigationEnd` event by default.

Also you can emit custom events for start/end navigation.

For example, show loading progress while data is fetching:

```typescript
this.loadingBarService.start('data');
this.dataService.get(() => {
  ...
  this.loadingBarService.end('data');
});
```

State switched to `None` only after all started events was ended.


## Examples

* collection:loading-bar - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-loading-bar), [demo](https://ngx-kit.com/collection/module/ui-loading-bar)
