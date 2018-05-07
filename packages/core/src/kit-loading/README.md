# Loading-bar

Service for providing loading state.


## Scope

* Loading bar
* Global loading spinner
* Local progress indication


## Usage

### Global progress

Provide `KitLoadingService`, get `global` progress and subscribe on state changes:

```typescript
constructor(private loading: KitLoadingService) {
}

ngOnInit() {
  this.loading.global.stateChanges
      .subscribe(s => {
        this.loadingState = s;
      });
}
```

There are two states: `KitLoadingState.InProgress` and `KitLoadingState.None`.

State changes on `NavigationStart` and `NavigationEnd` event by default.

Also you can run progress manually. For example, show loading progress while data is fetching:

```typescript
this.loading.global.start('data');
this.dataService.get().subscribe(() => {
  ...
  this.loading.global.end('data');
});
```

State switched to `None` only after all started events was ended.

### Custom progress

Get a progress by `.progress(key: string)` method, if progress is not presented it will be automatically created.

Custom progresses do not watch on router events, only on manual `start`/`end` calls.

```typescript
this.loading.progress('data-loading').start('data');
this.dataService.get().subscribe(() => {
  ...
  this.loading.progress('data-loading').end('data');
});
```


## Example

* collection:loading-bar - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-loading-bar), [demo](https://ngx-kit.com/collection/module/ui-loading-bar)
