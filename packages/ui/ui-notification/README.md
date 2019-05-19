# Notification component for Angular

## Installation

```
$ ng add @ngx-kit/ui-notification
```

Or

* `$ npm i @ngx-kit/core @ngx-kit/ui-notification hammerjs`
* Provide `UiNotificationModule.forRoot()` in the main module
* Add `import 'hammerjs';` to `main.ts` file.


## Usage

Provide the service:

```typescript
constructor(private notification: UiNotificationService) {
}
```

Show a notification:

```typescript
this.notification.open({message: 'Notification message'});
```

### Title

### Color

### Duration

## Config

### Placement

## Theming

```
--ui-notification-color-default-background
--ui-notification-color-default-color
--ui-notification-color-primary-background
--ui-notification-color-primary-color
--ui-notification-color-danger-background
--ui-notification-color-danger-color
```
