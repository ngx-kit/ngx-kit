import { TemplateRef } from '@angular/core';

export enum UiDialogType {
  Alert = 'alert',
  Confirm = 'confirm',
  Prompt = 'prompt',
}

export interface UiDialogOptions {
  type: UiDialogType;
  header: string;
  message: string;
  template: TemplateRef<any>;
  color: string;
}
