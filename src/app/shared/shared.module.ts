import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitFullModule } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { PostComponent } from './post/post.component';
import { ContentComponent } from './content/content.component';
import { DemoComponent } from './demo/demo.component';
import { AccordionComponent } from './kit/accordion/accordion.component';
import { AlertComponent } from './kit/alert/alert.component';
import { AutoCompleteComponent } from './kit/auto-complete/auto-complete.component';
import { BadgeComponent } from './kit/badge/badge.component';
import { BreadcrumbComponent } from './kit/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './kit/button/button.component';
import { CheckboxComponent } from './kit/checkbox/checkbox.component';
import { ColorPickerComponent } from './kit/color-picker/color-picker.component';
import { DatePickerComponent } from './kit/date-picker/date-picker.component';
import { DropdownMenuComponent } from './kit/dropdown-menu/dropdown-menu.component';
import { FormComponent } from './kit/form/form.component';
import { InputComponent } from './kit/input/input.component';
import { LoadingBarComponent } from './kit/loading-bar/loading-bar.component';
import { MenuComponent } from './kit/menu/menu.component';
import { ModalComponent } from './kit/modal/modal.component';
import { NotificationComponent } from './kit/notification/notification.component';
import { PaginationComponent } from './kit/pagination/pagination.component';
import { PopoverComponent } from './kit/popover/popover.component';
import { RadioComponent } from './kit/radio/radio.component';
import { SelectComponent } from './kit/select/select.component';
import { TabsComponent } from './kit/tabs/tabs.component';
import { TagComponent } from './kit/tag/tag.component';
import { TextareaComponent } from './kit/textarea/textarea.component';
import { ToggleComponent } from './kit/toggle/toggle.component';
import { TooltipComponent } from './kit/tooltip/tooltip.component';
import { AccordionDemoDefaultComponent } from './kit2/accordion/accordion-demo-default/accordion-demo-default.component';
import { AccordionDemoMultipleComponent } from './kit2/accordion/accordion-demo-multiple/accordion-demo-multiple.component';
import { TitleComponent } from './title/title.component';

const exported = [
  ContentComponent,
  PostComponent,
  DemoComponent,
  TitleComponent,
];
const modulesExported = [
  AccordionComponent,
  AlertComponent,
  AutoCompleteComponent,
  BadgeComponent,
  BreadcrumbComponent,
  ButtonComponent,
  CheckboxComponent,
  ColorPickerComponent,
  DatePickerComponent,
  DropdownMenuComponent,
  FormComponent,
  InputComponent,
  LoadingBarComponent,
  MenuComponent,
  ModalComponent,
  NotificationComponent,
  PaginationComponent,
  PopoverComponent,
  RadioComponent,
  SelectComponent,
  TabsComponent,
  TagComponent,
  TextareaComponent,
  ToggleComponent,
  TooltipComponent,
];
const kit2 = [
  AccordionDemoDefaultComponent,
  AccordionDemoMultipleComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StylerModule,
    KitFullModule,
  ],
  declarations: [
    ...exported,
    ...modulesExported,
    ...kit2,
  ],
  exports: [
    ...exported,
    ...modulesExported,
    ...kit2,
  ],
})
export class SharedModule {
}
