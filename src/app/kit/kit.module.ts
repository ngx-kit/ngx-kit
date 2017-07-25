import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitFullModule, KitLoadingBarService, } from '@ngx-kit/ngx-kit';
import { SharedModule } from '../shared/shared.module';
import { KitRoutingModule } from './kit-routing.module';
import { KitComponent } from './kit/kit.component';
import { AccordionComponent } from './modules/accordion/accordion.component';
import { AutoCompleteComponent } from './modules/auto-complete/auto-complete.component';
import { BadgeComponent } from './modules/badge/badge.component';
import { BreadcrumbComponent } from './modules/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './modules/button/button.component';
import { CheckboxComponent } from './modules/checkbox/checkbox.component';
import { DatePickerComponent } from './modules/date-picker/date-picker.component';
import { DividerComponent } from './modules/divider/divider.component';
import { DropdownMenuComponent } from './modules/dropdown-menu/dropdown-menu.component';
import { FormComponent } from './modules/form/form.component';
import { InputComponent } from './modules/input/input.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { LoadingBarComponent } from './modules/loading-bar/loading-bar.component';
import { MathInputComponent } from './modules/math-input/math-input.component';
import { MenuComponent } from './modules/menu/menu.component';
import { ModalComponent } from './modules/modal/modal.component';
import { PaginationComponent } from './modules/pagination/pagination.component';
import { PopoverComponent } from './modules/popover/popover.component';
import { RadioComponent } from './modules/radio/radio.component';
import { SelectComponent } from './modules/select/select.component';
import { TabsComponent } from './modules/tabs/tabs.component';
import { TagComponent } from './modules/tag/tag.component';
import { TextareaComponent } from './modules/textarea/textarea.component';
import { ToggleComponent } from './modules/toggle/toggle.component';
import { TooltipComponent } from './modules/tooltip/tooltip.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    KitRoutingModule,
    KitFullModule,
  ],
  declarations: [
    KitComponent,
    BreadcrumbComponent,
    ButtonComponent,
    AccordionComponent,
    AutoCompleteComponent,
    BadgeComponent,
    CheckboxComponent,
    DatePickerComponent,
    DividerComponent,
    DropdownMenuComponent,
    FormComponent,
    TitleComponent,
    InputComponent,
    LayoutComponent,
    MathInputComponent,
    MenuComponent,
    ModalComponent,
    RadioComponent,
    SelectComponent,
    TabsComponent,
    TextareaComponent,
    ToggleComponent,
    TooltipComponent,
    TagComponent,
    PaginationComponent,
    PopoverComponent,
    LoadingBarComponent,
  ],
  providers: [
    KitLoadingBarService,
  ],
})
export class KitModule {
}
