import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentResolverService } from '../core/content-resolver.service';
import { ContentComponent } from '../shared/content/content.component';
import { KitComponent } from './kit/kit.component';
import { AccordionComponent } from './modules/accordion/accordion.component';
import { AlertComponent } from './modules/alert/alert.component';
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
import { SpinnerComponent } from './modules/spinner/spinner.component';
import { TabsComponent } from './modules/tabs/tabs.component';
import { TagComponent } from './modules/tag/tag.component';
import { TextareaComponent } from './modules/textarea/textarea.component';
import { ToggleComponent } from './modules/toggle/toggle.component';
import { TooltipComponent } from './modules/tooltip/tooltip.component';

const routes: Routes = [
  {
    path: '',
    component: KitComponent,
    children: [
      {
        path: '',
        component: ContentComponent,
        data: {
          content: 'kit/overview.json',
        },
        resolve: {
          content: ContentResolverService,
        },
      },
      {
        path: 'getting-started',
        component: ContentComponent,
        data: {
          content: 'kit/getting-started.json',
        },
        resolve: {
          content: ContentResolverService,
        },
      },
      {
        path: 'modules',
        children: [
          {
            path: 'accordion',
            component: AccordionComponent,
            data: {
              content: 'kit/accordion.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'alert',
            component: AlertComponent,
            data: {
              content: 'kit/alert.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'auto-complete',
            component: AutoCompleteComponent,
            data: {
              content: 'kit/auto-complete.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'badge',
            component: BadgeComponent,
            data: {
              content: 'kit/badge.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'breadcrumb',
            component: BreadcrumbComponent,
            data: {
              content: 'kit/breadcrumb.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'button',
            component: ButtonComponent,
            data: {
              content: 'kit/button.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'checkbox',
            component: CheckboxComponent,
            data: {
              content: 'kit/checkbox.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'date-picker',
            component: DatePickerComponent,
            data: {
              content: 'kit/date-picker.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'divider',
            component: DividerComponent,
            data: {
              content: 'kit/divider.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'dropdown-menu',
            component: DropdownMenuComponent,
            data: {
              content: 'kit/dropdown-menu.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'form',
            component: FormComponent,
            data: {
              content: 'kit/form.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'input',
            component: InputComponent,
            data: {
              content: 'kit/input.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'layout',
            component: LayoutComponent,
            data: {
              content: 'kit/layout.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'loading-bar',
            component: LoadingBarComponent,
            data: {
              content: 'kit/loading-bar.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'math-input',
            component: MathInputComponent,
            data: {
              content: 'kit/math-input.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'menu',
            component: MenuComponent,
            data: {
              content: 'kit/menu.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'modal',
            component: ModalComponent,
            data: {
              content: 'kit/modal.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'pagination',
            component: PaginationComponent,
            data: {
              content: 'kit/pagination.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'popover',
            component: PopoverComponent,
            data: {
              content: 'kit/popover.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'radio',
            component: RadioComponent,
            data: {
              content: 'kit/radio.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'select',
            component: SelectComponent,
            data: {
              content: 'kit/select.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'spinner',
            component: SpinnerComponent,
            data: {
              content: 'kit/spinner.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'tabs',
            component: TabsComponent,
            data: {
              content: 'kit/tabs.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'tag',
            component: TagComponent,
            data: {
              content: 'kit/tag.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'textarea',
            component: TextareaComponent,
            data: {
              content: 'kit/textarea.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'toggle',
            component: ToggleComponent,
            data: {
              content: 'kit/toggle.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'tooltip',
            component: TooltipComponent,
            data: {
              content: 'kit/tooltip.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitRoutingModule {
}
