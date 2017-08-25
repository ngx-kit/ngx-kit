import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { KitCoreOverlayContainerPosition, KitCoreOverlayContainerType } from '../../../core/meta/overlay';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultOverlayContainerStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  holder(): StyleDef {
    const params = this.theme.params;
    return {
      boxShadow: params.shadows.overlay,
      borderRadius: params.borders.radius,
    };
  }

  host(state: {
    type: KitCoreOverlayContainerType;
    position: KitCoreOverlayContainerPosition;
    opened: boolean;
  }): StyleDef {
    return {};
  }

  overlay(): StyleDef {
    return {};
  }
}
