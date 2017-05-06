import { Inject, Injectable, Optional } from '@angular/core';

import { KitThemeProps, KitThemeService, KitSwatch, KitStyle, KitStylesMap } from './interfaces';
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

  /**
   * Get color by swatch or type name.
   *
   * @param name
   */
  getColor(name: string): KitSwatch {
    const props = this.getThemeProps();
    if (props.colors.types[name]) {
      return this.getSwatch(props.colors.types[name]);
    } else {
      return this.getSwatch(name);
    }
  }

  /**
   * Get color swatch by name.
   *
   * @param name
   */
  getSwatch(name: string): KitSwatch {
    const props = this.getThemeProps();
    const swatch = props.colors.swatches.find(s => s.name === name);
    if (swatch) {
      return swatch;
    } else {
      throw new Error(`Swatch "${name}" not found!`);
    }
  }

  mapColor(color: string, map: KitStylesMap): KitStyle {
    const result: KitStyle = {};
    const swatch: KitSwatch = this.getColor(color);
    for (const key in map) {
      result[key] = swatch[map[key]];
    }
    return result;
  }

}
