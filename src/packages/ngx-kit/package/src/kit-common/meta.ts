import { TemplateRef, Type } from '@angular/core';

export type KitMultiOutletType = TemplateRef<any> | Type<any>;

export interface KitClassSetter {
  [key: string]: KitClassValue;
}

export type KitClassValue = string | number | boolean | null;
