import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitDefaultThemeModule, KitFullModule } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { ApiComponent } from './api/api.component';
import { ContentComponent } from './content/content.component';
import { DemoComponent } from './demo/demo.component';
import { AccordionDemoDefaultComponent } from './kit2/accordion/accordion-demo-default/accordion-demo-default.component';
import { AccordionDemoMultipleComponent } from './kit2/accordion/accordion-demo-multiple/accordion-demo-multiple.component';
import { AlertDemoClosableComponent } from './kit2/alert/alert-demo-closable/alert-demo-closable.component';
import { AlertDemoCloseTextComponent } from './kit2/alert/alert-demo-close-text/alert-demo-close-text.component';
import { AlertDemoColorComponent } from './kit2/alert/alert-demo-color/alert-demo-color.component';
import { AlertDemoDefaultComponent } from './kit2/alert/alert-demo-default/alert-demo-default.component';
import { AlertDemoTitleComponent } from './kit2/alert/alert-demo-title/alert-demo-title.component';
import { AutoCompleteDemoDataFactoryComponent } from './kit2/auto-complete/auto-complete-demo-data-factory/auto-complete-demo-data-factory.component';
import { AutoCompleteDemoDefaultComponent } from './kit2/auto-complete/auto-complete-demo-default/auto-complete-demo-default.component';
import { BadgeDemoColorComponent } from './kit2/badge/badge-demo-color/badge-demo-color.component';
import { BadgeDemoDefaultComponent } from './kit2/badge/badge-demo-default/badge-demo-default.component';
import { BadgeDemoPositionComponent } from './kit2/badge/badge-demo-position/badge-demo-position.component';
import { BadgeDemoSizeComponent } from './kit2/badge/badge-demo-size/badge-demo-size.component';
import { ButtonDemoColorComponent } from './kit2/button/button-demo-color/button-demo-color.component';
import { ButtonDemoDefaultComponent } from './kit2/button/button-demo-default/button-demo-default.component';
import { ButtonDemoDisabledComponent } from './kit2/button/button-demo-disabled/button-demo-disabled.component';
import { ButtonDemoInvertedOutlinedComponent } from './kit2/button/button-demo-inverted-outlined/button-demo-inverted-outlined.component';
import { ButtonDemoInvertedComponent } from './kit2/button/button-demo-inverted/button-demo-inverted.component';
import { ButtonDemoOutlinedComponent } from './kit2/button/button-demo-outlined/button-demo-outlined.component';
import { ButtonDemoSizeComponent } from './kit2/button/button-demo-size/button-demo-size.component';
import { ButtonGroupDemoDefaultComponent } from './kit2/button/button-group-demo-default/button-group-demo-default.component';
import { ButtonGroupDemoMultipleComponent } from './kit2/button/button-group-demo-multiple/button-group-demo-multiple.component';
import { ButtonGroupDemoSelectableComponent } from './kit2/button/button-group-demo-selectable/button-group-demo-selectable.component';
import { ButtonGroupDemoVerticalComponent } from './kit2/button/button-group-demo-vertical/button-group-demo-vertical.component';
import { CheckboxDemoDefaultComponent } from './kit2/checkbox/checkbox-demo-default/checkbox-demo-default.component';
import { ColorPickerDemoDebounceComponent } from './kit2/color-picker/color-picker-demo-debounce/color-picker-demo-debounce.component';
import { ColorPickerDemoDefaultComponent } from './kit2/color-picker/color-picker-demo-default/color-picker-demo-default.component';
import { ColorPickerDemoPopupComponent } from './kit2/color-picker/color-picker-demo-popup/color-picker-demo-popup.component';
import { ColorPickerDemoPopup2Component } from './kit2/color-picker/color-picker-demo-popup2/color-picker-demo-popup2.component';
import { DatePickerDemoDefaultComponent } from './kit2/date-picker/date-picker-demo-default/date-picker-demo-default.component';
import { DropdownMenuDemoDefaultComponent } from './kit2/dropdown-menu/dropdown-menu-demo-default/dropdown-menu-demo-default.component';
import { FormDemoDefaultComponent } from './kit2/form/form-demo-default/form-demo-default.component';
import { InputDemoDefaultComponent } from './kit2/input/input-demo-default/input-demo-default.component';
import { InputDemoMathComponent } from './kit2/input/input-demo-math/input-demo-math.component';
import { LoadingBarDemoDefaultComponent } from './kit2/loading-bar/loading-bar-demo-default/loading-bar-demo-default.component';
import { MenuDemoDefaultComponent } from './kit2/menu/menu-demo-default/menu-demo-default.component';
import { MenuDemoDisabledComponent } from './kit2/menu/menu-demo-disabled/menu-demo-disabled.component';
import { MenuDemoMultiSubComponent } from './kit2/menu/menu-demo-multi-sub/menu-demo-multi-sub.component';
import { MenuDemoOrganizedComponent } from './kit2/menu/menu-demo-organized/menu-demo-organized.component';
import { MenuDemoVerticalComponent } from './kit2/menu/menu-demo-vertical/menu-demo-vertical.component';
import { ModalDemoDefaultComponent } from './kit2/modal/modal-demo-default/modal-demo-default.component';
import { NotificationDemoColorComponent } from './kit2/notification/notification-demo-color/notification-demo-color.component';
import { NotificationDemoConfigDurationComponent } from './kit2/notification/notification-demo-config-duration/notification-demo-config-duration.component';
import { NotificationDemoConfigSideComponent } from './kit2/notification/notification-demo-config-side/notification-demo-config-side.component';
import { NotificationDemoDefaultComponent } from './kit2/notification/notification-demo-default/notification-demo-default.component';
import { NotificationDemoDurationComponent } from './kit2/notification/notification-demo-duration/notification-demo-duration.component';
import { NotificationDemoWithTitleComponent } from './kit2/notification/notification-demo-with-title/notification-demo-with-title.component';
import { RadioDemoDefaultComponent } from './kit2/radio/radio-demo-default/radio-demo-default.component';
import { RadioGroupDemoCustomOptionsComponent } from './kit2/radio/radio-group-demo-custom-options/radio-group-demo-custom-options.component';
import { RadioGroupDemoDefaultComponent } from './kit2/radio/radio-group-demo-default/radio-group-demo-default.component';
import { RadioGroupDemoDirectionComponent } from './kit2/radio/radio-group-demo-direction/radio-group-demo-direction.component';
import { RadioGroupDemoOptionsComponent } from './kit2/radio/radio-group-demo-options/radio-group-demo-options.component';
import { RadioGroupDemoSimpleOptionsComponent } from './kit2/radio/radio-group-demo-simple-options/radio-group-demo-simple-options.component';
import { SelectDemoCustomOptionsComponent } from './kit2/select/select-demo-custom-options/select-demo-custom-options.component';
import { SelectDemoDefaultComponent } from './kit2/select/select-demo-default/select-demo-default.component';
import { SelectDemoDropdownComponent } from './kit2/select/select-demo-dropdown/select-demo-dropdown.component';
import { SelectDemoListComponent } from './kit2/select/select-demo-list/select-demo-list.component';
import { SelectDemoOptionTemplateComponent } from './kit2/select/select-demo-option-template/select-demo-option-template.component';
import { TabsDemoDefaultComponent } from './kit2/tabs/tabs-demo-default/tabs-demo-default.component';
import { TagDemoColorComponent } from './kit2/tag/tag-demo-color/tag-demo-color.component';
import { TagDemoDefaultComponent } from './kit2/tag/tag-demo-default/tag-demo-default.component';
import { TextareaDemoDefaultComponent } from './kit2/textarea/textarea-demo-default/textarea-demo-default.component';
import { ToggleDemoDefaultComponent } from './kit2/toggle/toggle-demo-default/toggle-demo-default.component';
import { TooltipDemoColorComponent } from './kit2/tooltip/tooltip-demo-color/tooltip-demo-color.component';
import { TooltipDemoDefaultComponent } from './kit2/tooltip/tooltip-demo-default/tooltip-demo-default.component';
import { TooltipDemoPositionComponent } from './kit2/tooltip/tooltip-demo-position/tooltip-demo-position.component';
import { PostComponent } from './post/post.component';
import { TitleComponent } from './title/title.component';

const exported = [
  ContentComponent,
  PostComponent,
  DemoComponent,
  TitleComponent,
  ApiComponent,
];
const kit2 = [
  AccordionDemoDefaultComponent,
  AccordionDemoMultipleComponent,
  AlertDemoDefaultComponent,
  AlertDemoColorComponent,
  AlertDemoClosableComponent,
  AlertDemoCloseTextComponent,
  AlertDemoTitleComponent,
  AutoCompleteDemoDefaultComponent,
  AutoCompleteDemoDataFactoryComponent,
  BadgeDemoDefaultComponent,
  BadgeDemoColorComponent,
  BadgeDemoSizeComponent,
  BadgeDemoPositionComponent,
  ButtonDemoDefaultComponent,
  ButtonDemoColorComponent,
  ButtonDemoSizeComponent,
  ButtonDemoDisabledComponent,
  ButtonDemoInvertedComponent,
  ButtonDemoInvertedOutlinedComponent,
  ButtonDemoOutlinedComponent,
  ButtonGroupDemoDefaultComponent,
  ButtonGroupDemoVerticalComponent,
  ButtonGroupDemoSelectableComponent,
  ButtonGroupDemoMultipleComponent,
  CheckboxDemoDefaultComponent,
  ColorPickerDemoDefaultComponent,
  ColorPickerDemoPopupComponent,
  ColorPickerDemoPopup2Component,
  ColorPickerDemoDebounceComponent,
  DatePickerDemoDefaultComponent,
  DropdownMenuDemoDefaultComponent,
  FormDemoDefaultComponent,
  InputDemoDefaultComponent,
  InputDemoMathComponent,
  LoadingBarDemoDefaultComponent,
  MenuDemoDefaultComponent,
  MenuDemoVerticalComponent,
  MenuDemoMultiSubComponent,
  MenuDemoOrganizedComponent,
  MenuDemoDisabledComponent,
  ModalDemoDefaultComponent,
  NotificationDemoDefaultComponent,
  NotificationDemoWithTitleComponent,
  NotificationDemoConfigSideComponent,
  NotificationDemoConfigDurationComponent,
  NotificationDemoDurationComponent,
  NotificationDemoColorComponent,
  RadioDemoDefaultComponent,
  RadioGroupDemoDefaultComponent,
  RadioGroupDemoOptionsComponent,
  RadioGroupDemoSimpleOptionsComponent,
  RadioGroupDemoCustomOptionsComponent,
  RadioGroupDemoDirectionComponent,
  SelectDemoDefaultComponent,
  SelectDemoDropdownComponent,
  SelectDemoListComponent,
  SelectDemoCustomOptionsComponent,
  SelectDemoOptionTemplateComponent,
  TabsDemoDefaultComponent,
  TagDemoDefaultComponent,
  TagDemoColorComponent,
  TextareaDemoDefaultComponent,
  ToggleDemoDefaultComponent,
  TooltipDemoColorComponent,
  TooltipDemoDefaultComponent,
  TooltipDemoPositionComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StylerModule,
    KitFullModule,
    KitDefaultThemeModule,
  ],
  declarations: [
    ...exported,
    ...kit2,
  ],
  exports: [
    ...exported,
    ...kit2,
  ],
})
export class SharedModule {
}
