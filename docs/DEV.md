# Dev Docs

## Module creating checklist

* Export module via `public_api.ts`
* Declare module in `importer/kit-full.module.ts`

## Component creating checklist

* Export component via module's `index.ts`
* Declare component in module's class
* Add token to `core/meta/tokens.ts`
* Add styles to `default-theme/styles/MODULES_NAME/kit-default-COMPONENT_FILE_NAME.style.ts`
* Export style via default-theme/index.ts
* Add style-provider to `default-theme/kit-default-theme.module.ts`
