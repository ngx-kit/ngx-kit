# notification

https://ngx-kit.com/kit/modules/notification

## Global config

```typescript
constructor(private notificationService: KitNotificationService) {
  this.notificationService.config({
    duration: 4000,
    position: 'top-right',    
  });
}
```

## Open notification

```typescript
constructor(private notificationService: KitNotificationService) {
  this.notificationService.open({message: 'Notification message'});
}
```

## API

### `KitNotificationService.config()`

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| *duration* | `number` | `4000` | How long to display a notification |
| *position* | `string` | `'top-right'` | Where to stack notifications |

### `KitNotificationService.open()`

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| *message* | `string` | *required | |
| *title* | `string` | *optional | |
| *duration* | `number` | *optional | |
| *color* | `number` | *optional | |
