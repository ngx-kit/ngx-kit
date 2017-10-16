import { NgModule } from '@angular/core';
import { BemClassGenStrategy, ClassGenStategy, StylerModule } from '@ngx-kit/styler';
import { KitAriaModule } from './kit-aria/kit-aria.module';
import { KitCollapseModule } from './kit-collapse/kit-collapse.module';
import { KitCommonModule } from './kit-common/kit-common.module';
import { KitDatetimeModule } from './kit-datetime/kit-datetime.module';
import { KitFormsModule } from './kit-forms/kit-forms.module';
import { KitIconsModule } from './kit-icons/kit-icons.module';
import { KitLoadingBarModule } from './kit-loading-bar/kit-loading-bar.module';
import { KitNotificationModule } from './kit-notification/kit-notification.module';
import { KitOverlayModule } from './kit-overlay/kit-overlay.module';
import { KitPointerModule } from './kit-pointer/kit-pointer.module';
import { KitSlideModule } from './kit-slide/kit-slide.module';

const initableModules = [
  StylerModule,
  KitIconsModule,
  KitLoadingBarModule,
  KitNotificationModule,
  KitOverlayModule,
];
const simpleModules = [
  KitAriaModule,
  KitCollapseModule,
  KitCommonModule,
  KitDatetimeModule,
  KitFormsModule,
  KitPointerModule,
  KitSlideModule,
];

@NgModule({
  imports: [
    StylerModule.forRoot(),
    KitIconsModule.forRoot(),
    KitLoadingBarModule.forRoot(),
    KitNotificationModule.forRoot(),
    KitOverlayModule.forRoot(),
    ...simpleModules,
  ],
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
