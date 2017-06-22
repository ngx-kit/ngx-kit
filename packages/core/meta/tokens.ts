import { InjectionToken } from '@angular/core';

import { KitThemeService } from './theme';
import { KitComponentStyle } from './component';


export const kitTheme = new InjectionToken<KitThemeService>('kitTheme');
// core
export const kitComponentOverlayContainer = new InjectionToken<KitComponentStyle>('kitComponentOverlayContainer');
// buttons
export const kitComponentButton = new InjectionToken<KitComponentStyle>('kitComponentButton');
export const kitComponentButtonGroup = new InjectionToken<KitComponentStyle>('kitComponentButtonGroup');
export const kitComponentDropdownMenu = new InjectionToken<KitComponentStyle>('kitComponentDropdownMenu');
export const kitComponentDropdownMenuItem = new InjectionToken<KitComponentStyle>('kitComponentDropdownMenuItem');
// forms
export const kitComponentAutoComplete = new InjectionToken<KitComponentStyle>('kitComponentAutoComplete');
export const kitComponentCheckbox = new InjectionToken<KitComponentStyle>('kitComponentCheckbox');
export const kitComponentDatePicker = new InjectionToken<KitComponentStyle>('kitComponentDatePicker');
export const kitComponentFormError = new InjectionToken<KitComponentStyle>('kitComponentFormError');
export const kitComponentFormGroup = new InjectionToken<KitComponentStyle>('kitComponentFormGroup');
export const kitComponentFormLabel = new InjectionToken<KitComponentStyle>('kitComponentFormLabel');
export const kitComponentInput = new InjectionToken<KitComponentStyle>('kitComponentInput');
export const kitComponentMathInput = new InjectionToken<KitComponentStyle>('kitComponentMathInput');
export const kitComponentRadio = new InjectionToken<KitComponentStyle>('kitComponentRadio');
export const kitComponentSelect = new InjectionToken<KitComponentStyle>('kitComponentSelect');
export const kitComponentTextarea = new InjectionToken<KitComponentStyle>('kitComponentTextarea');
export const kitComponentToggle = new InjectionToken<KitComponentStyle>('kitComponentToggle');
// misc
export const kitComponentBadge = new InjectionToken<KitComponentStyle>('kitComponentBadge');
export const kitComponentDivider = new InjectionToken<KitComponentStyle>('kitComponentDivider');
export const kitComponentTag = new InjectionToken<KitComponentStyle>('kitComponentTag');
export const kitComponentTooltipView = new InjectionToken<KitComponentStyle>('kitComponentTooltipView');
