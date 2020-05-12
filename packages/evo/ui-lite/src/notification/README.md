# Angular Notifications

Notifications for Angular application.



## Installation

##### 1. Add the package

```
$ ng add @ngx-kit/evo
```

##### 2. Add Hammer.JS for proper working

```
$ npm i hammerjs
```

Add `import 'hammerjs';` to `main.ts` file.

##### 3. Add notifications host to a root component.

```html
<evo-notifications-host></evo-notifications-host>
```



## Usage

Use `Notifications` service from `@ngx-kit/evo/notifications`.

```typescript
constructor(private notifications: Notifications) {
}
```

Show a notification:

```typescript
this.notifications.open({message: 'Notification message'});
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



## Extracting

WIP
