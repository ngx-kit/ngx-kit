import { NgModule } from '@angular/core';
import { BemClassGenStrategy, ClassGenStategy, StylerModule } from '@ngx-kit/styler';
import { KitCommonModule } from './common/kit-common.module';
import { KitIconsModule } from './icons/kit-icons.module';
import { KitOverlayModule } from './overlay/kit-overlay.module';
import { KitPopupModule } from './popup/kit-popup.module';

const initableModules = [
  StylerModule,
  KitIconsModule,
];
const simpleModules = [
  KitCommonModule,
  KitOverlayModule,
  KitPopupModule,
];

@NgModule({
  imports: [
    StylerModule.forRoot(),
    KitIconsModule.forRoot(),
    ...simpleModules,
  ],
  declarations: [],
  providers: [
    {
      provide: ClassGenStategy,
      useClass: BemClassGenStrategy,
    },
  ],
  exports: [
    ...initableModules,
    ...simpleModules,
  ],
})
export class KitFullForRootModule {
}

@NgModule({
  imports: [
    ...initableModules,
    ...simpleModules,
  ],
  declarations: [],
  providers: [],
  exports: [
    ...initableModules,
    ...simpleModules,
  ],
})
export class KitFullModule {
}
