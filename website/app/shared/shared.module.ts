import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContentMenuComponent } from './content-menu/content-menu.component';
import { DemoComponent } from './demo/demo.component';
import { DocsPageComponent } from './docs-page/docs-page.component';
import { MdComponent } from './md/md.component';
import { ModulePage3ClassDeclarComponent } from './module-page3/module-page3-class-declar/module-page3-class-declar.component';
import { ModulePage3DecoratorFieldComponent } from './module-page3/module-page3-decorator-field/module-page3-decorator-field.component';
import { ModulePage3FunctionDeclarComponent } from './module-page3/module-page3-function-declar/module-page3-function-declar.component';
import { ModulePage3InterfaceDeclarComponent } from './module-page3/module-page3-interface-declar/module-page3-interface-declar.component';
import { ModulePage3Component } from './module-page3/module-page3.component';
import { ScrollUpDirective } from './scroll-up/scroll-up.directive';
import { TitleComponent } from './title/title.component';
import { KitTabsModule } from './ws-kit/tabs/kit-tabs.module';
import { UiLoadingBarModule } from './ws-kit/ui-loading-bar/ui-loading-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    KitTabsModule,
    UiLoadingBarModule,
  ],
  declarations: [
    DocsPageComponent,
    MdComponent,
    DemoComponent,
    TitleComponent,
    ContentMenuComponent,
    ScrollUpDirective,
    ModulePage3Component,
    ModulePage3ClassDeclarComponent,
    ModulePage3DecoratorFieldComponent,
    ModulePage3InterfaceDeclarComponent,
    ModulePage3FunctionDeclarComponent,
  ],
  exports: [
    DocsPageComponent,
    MdComponent,
    DemoComponent,
    TitleComponent,
    ContentMenuComponent,
    ScrollUpDirective,
    KitTabsModule,
    UiLoadingBarModule,
    ModulePage3ClassDeclarComponent,
    ModulePage3DecoratorFieldComponent,
    ModulePage3InterfaceDeclarComponent,
    ModulePage3FunctionDeclarComponent,
  ],
})
export class SharedModule {
}
