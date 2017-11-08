import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { isFunction } from '../../kit-util/is-function';

@Injectable()
export class KitMorphFormBuilder {
  control(formState: Object, validator?: ValidatorFn | ValidatorFn[] | null,
          asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    return new FormControl(formState, validator, asyncValidator);
  }

  dynamic(condFn: (pathValueFn: any) => boolean, innerFn: () => FormGroup | FormControl) {
    return (group: FormGroup, controlName: string) => {
      group.valueChanges
          .startWith(true)
          .subscribe((v: any) => {
            let control: AbstractControl | null;
            if (condFn((path: string) => {
                  control = group.get(path);
                  return control ? control.value : null;
                })) {
              // add schema
              if (!group.get(controlName)) {
                group.addControl(controlName, innerFn());
              }
            } else {
              // remove schema
              if (group.get(controlName)) {
                group.removeControl(controlName);
              }
            }
          });
    }
  }

  group(controlsConfig: {[key: string]: any}, extra: {[key: string]: any} | null = null) {
    const validator: ValidatorFn = extra != null ? extra['validator'] : null;
    const asyncValidator: AsyncValidatorFn = extra != null ? extra['asyncValidator'] : null;
    const group = new FormGroup({}, validator, asyncValidator);
    Object.keys(controlsConfig).forEach(controlName => {
      const controlDeclaration = controlsConfig[controlName];
      if (isFunction(controlDeclaration)) {
        controlDeclaration(group, controlName);
      } else {
        group.addControl(controlName, controlDeclaration);
      }
    });
    return group;
  }
}
