import { Inject, Injectable, Optional } from '@angular/core';

import { KitThemeProps, KitThemeService } from './interfaces';
import { KitTheme } from './kit-theme-token';
import { kitDefaultProps } from './default-props';

@Injectable()
export class KitCoreService {

  constructor(@Optional() @Inject(KitTheme) private theme: KitThemeService) {
    if (this.theme) {
    }
  }

  getThemeProps(): KitThemeProps {
    if (this.theme) {
      return this.theme.props;
    } else {
      return kitDefaultProps;
    }
  }

//  registerComponents(modifiers: KitThemeComponents) {
//    this.themeComponents = [...this.themeComponents, ...modifiers];
//  }

  getComponentModifiers<T>(componentId: string): T {
    if (this.theme) {
      const component = this.theme.components.find(m => m.componentId === componentId);
      if (component) {
        return component.modifiers;
      } else {
        return {} as T;
      }
    } else {
      return {} as T;
    }
  }

}
