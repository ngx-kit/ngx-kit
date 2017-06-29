import { Inject, Injectable } from '@angular/core';
import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultModalStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  content(): StyleDef {
    return {
      padding: '16px 32px 32px',
    };
  }

  footer(): StyleDef {
    return {
      background: 'aliceblue',
      borderRadius: '0 0 4px 4px',
      borderTop: '1px solid #e0e0e0',
      padding: '16px 32px',
      textAlign: 'right',
    };
  }

  header(): StyleDef {
    return {
      padding: '16px 32px',
      fontSize: '1.6rem',
      fontWeight: 600,
      borderBottom: '1px solid #e0e0e0',
      borderRadius: '4px 4px 0 0',
    };
  }

  host(): StyleDef {
    return {};
  }

  modal(): StyleDef {
    return {
      background: '#ffffff',
      borderRadius: '4px',
      boxShadow: '0 10px 70px rgba(0, 0, 0, .4)',
      color: '#444444',
      zIndex: 99999,
    };
  }
}
