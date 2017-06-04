import { InjectionToken } from '@angular/core';

import { KitThemeService } from './theme';
import { KitButtonStyle } from './components/button-style';
import { KitSelectStyle } from './components/select-style';

export const kitTheme = new InjectionToken<KitThemeService>('kitTheme');
// general
export const kitComponentButton = new InjectionToken<KitButtonStyle>('kitComponentButton');
// forms
export const kitComponentSelect = new InjectionToken<KitSelectStyle>('kitComponentSelect');
