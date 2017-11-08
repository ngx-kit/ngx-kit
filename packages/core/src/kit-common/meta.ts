import { TemplateRef, Type } from '@angular/core';

export type KitMultiOutletType = TemplateRef<any> | Type<any>;

export interface KitClassSetter {
  [key: string]: KitClassValue;
}

export type KitClassValue = string | number | boolean | null;

export interface KitStyles {
  [key: string]: string;
}

export interface StrategyEl {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
}

export interface StrategyField {
  width: number;
  height: number;
}
