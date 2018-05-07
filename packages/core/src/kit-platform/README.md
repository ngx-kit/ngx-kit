# Browser

Shortcut to `isPlatformBrowser`/`isPlatformServer` functions.

## Usage

```typescript
constructor(private platform: KitPlatformService) {
  if (this.platform.isBrowser()) {}
  // or
  if (this.platform.isServer()) {}
}
``` 
