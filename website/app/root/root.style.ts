import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';
import { ThemeService } from '../core/theme.service';

@Injectable()
export class RootStyle implements ComponentStyle {
  constructor(private theme: ThemeService) {
  }

  host(): StyleDef {
    return {
      color: this.theme.params.textColor,
    };
  }
}
