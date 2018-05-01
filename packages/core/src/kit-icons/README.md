# Icons

Icons registry and component for svg icons. 

### Server-rendering

Do not forget to define full url to files:

```typescript
this.iconsRegistry.add([
  {name: 'search', url: `${environment.assetsUrl}/icons/search.svg`},
  ...
]);
```
