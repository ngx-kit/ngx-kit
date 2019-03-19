import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  HostListener,
  NgModule,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { KitCollapseHostService, KitCollapseItemService, KitIconsModule } from '@ngx-kit/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@NgModule({
  imports: [
    CommonModule,
    KitIconsModule,
  ],
  declarations: [forwardRef(() => UiAccordionTitleComponent)],
  exports: [forwardRef(() => UiAccordionTitleComponent)],
})
export class UiAccordionTitleModule {
}

/**
 * Accordion title.
 */
@Component({
  selector: 'ui-accordion-title, [uiAccordionTitle]',
  templateUrl: './ui-accordion-title.component.html',
  styleUrls: ['./ui-accordion-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAccordionTitleComponent implements OnInit, OnDestroy {
  active: boolean;

  private destroy = new Subject();

  constructor(
    private item: KitCollapseItemService,
    private collapse: KitCollapseHostService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.collapse.activeChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {
        this.active = this.item.active;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }

  @HostListener('click')
  clickHandler() {
    this.item.toggle();
  }
}
