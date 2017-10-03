---
title: Contributing
apiOrder: 100
---

# Contributing to ngx-kit

## Docs

* Create README.md for any module.
* Write jsDoc for services, components and directives.
  * Mark component/directive methods with `@publicApi` in jsDoc, if you want do display method in website documentation.
  * Add service public method will be displayed in website documentation.
  * Use `@apiOrder` in jsDoc for sort services/components/directives in website documentation.  



## Best Practices

Common component delivered to a project by npm as a package. It means that you can't modify it's code directly.

Remember in most cases ngx-kit common components used for creating ui kits that will be used by end user. 

### Do not hide any elements or components inside 

You should give direct access to all components or html elements. It is important for easy modification, event binding, ARIA customizing. 

### Service better then directive or component

If you could place some logic inside service - do it. User should provide service by local component's providers.

For example `kit-overlay-position.service`. It could be some wrapper-component with same functionality, but result code would be redundant. 



## Commit Message Guidelines

### Commit Message Format

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The header is mandatory and the scope of the header is optional.

Footer should contain a closing reference to an issue if any.

### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

### Scope

The scope should be the name of the module affected (**common**, **overlay** etc).

There is currently few exception to the "use module name" rule:

* **packaging**: used for changes that change the npm package layout in all of our packages, e.g. public path changes, package.json changes done to all packages, d.ts file/format changes, changes to bundles, etc.
* **changelog**: used for updating the release notes in CHANGELOG.md
* none/empty string: useful for style, test and refactor changes that are done across all packages (e.g. style: add missing semicolons), global documentation

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes.

* "Closes #ID"
* "PR Close #ID"

Breaking Changes should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then used for this.
