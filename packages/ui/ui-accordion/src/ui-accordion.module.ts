import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {KitCollapseModule} from '@ngx-kit/core';
import {UiAccordionContentComponent} from './ui-accordion-content/ui-accordion-content.component';
import {UiAccordionPanelComponent} from './ui-accordion-panel/ui-accordion-panel.component';
import {UiAccordionTitleComponent} from './ui-accordion-title/ui-accordion-title.component';
import {UiAccordionComponent} from './ui-accordion/ui-accordion.component';
import {KitIconsModule, KitIconsRegistryService} from '../../../core';

@NgModule({
  imports: [
    CommonModule,
    KitCollapseModule,
    KitIconsModule,
  ],
  declarations: [
    UiAccordionComponent,
    UiAccordionPanelComponent,
    UiAccordionTitleComponent,
    UiAccordionContentComponent,
  ],
  exports: [
    KitCollapseModule,
    UiAccordionComponent,
    UiAccordionPanelComponent,
    UiAccordionTitleComponent,
    UiAccordionContentComponent,
  ],
})
export class UiAccordionModule {
  constructor(
    private icons: KitIconsRegistryService,
  ) {
    this.icons.add({
      name: 'ui-accordion-chevron',
      xml: `<?xml version="1.0" encoding="UTF-8"?><svg width="14px" height="9px" viewBox="0 0 14 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="export" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="chevron-bottom" transform="translate(-1.000000, -4.000000)"><rect id="placeholder" fill-opacity="0" x="0" y="0" width="16" height="16"></rect><polygon id="Path-22" fill="currentcolor" fill-rule="nonzero" points="13.2928932 4.29289322 14.7071068 5.70710678 8 12.4142136 1.29289322 5.70710678 2.70710678 4.29289322 8 9.58578644"></polygon></g></g></svg>`,
    });
  }
}
