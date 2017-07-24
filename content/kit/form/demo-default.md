---
route: kit/form
title: Default form
---

```html
<kit-form-group [touched]="true">
  <kit-form-label>Name</kit-form-label>
  <kit-input [formControlName]="'name'"></kit-input>
  <kit-form-error [validator]="'required'" i18n>You can't leave this empty.</kit-form-error>
  <kit-form-error [validator]="'minlength'" i18n>Name must be at least 4 characters long..</kit-form-error>
</kit-form-group>
```

```typescript
form: FormGroup;

constructor(private route: ActivatedRoute,
            private fb: FormBuilder) {
  this.form = this.fb.group({
    'name': [null, [Validators.required, Validators.minLength(4)]],
  });
}
```
