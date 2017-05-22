import { InjectionToken } from '@angular/core';

import { KitThemeService } from './interfaces';

export const KitTheme = new InjectionToken<KitThemeService>('KitTheme');
