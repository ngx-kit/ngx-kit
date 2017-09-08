import { NgModule } from '@angular/core';
import { BemClassGenStrategy, ClassGenStategy, StylerModule } from '@ngx-kit/styler';
import { KitCollapseModule } from './collapse/kit-collapse.module';
import { KitCommonModule } from './common/kit-common.module';
import { KitIconsModule } from './icons/kit-icons.module';
import { KitOverlayModule } from './overlay/kit-overlay.module';
import { KitPopupModule } from './popup/kit-popup.module';
import { KitSlideModule } from './slide/kit-slide.module';

const initableModules = [
  StylerModule,
  KitIconsModule,
];
const simpleModules = [
  KitCollapseModule,
  KitCommonModule,
  KitOverlayModule,
  KitPopupModule,
  KitSlideModule,
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
