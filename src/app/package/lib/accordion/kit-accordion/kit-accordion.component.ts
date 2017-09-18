import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { handleCollapseId, KitCollapseId } from '@ngx-kit/ngx-kit';
import { KitAccordionPanelComponent } from '../kit-accordion-panel/kit-accordion-panel.component';

/**
 * @todo ngModel for expandedId
 *
 * @apiOrder 1
 */
@Component({
  selector: 'kit-accordion,[kitAccordion]',
  templateUrl: './kit-accordion.template.html',
  styleUrls: ['./kit-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitAccordionComponent implements OnInit, AfterContentInit {
  /**
   * Automatically open first panel.
   */
  @Input() expandFirst = true;

  @Input() expandedId: KitCollapseId | KitCollapseId[];

  @Input() kitAccordion: void;

  /**
   * Allow few panels open at a time.
   */
  @Input() multiple = false;

  @ContentChildren(forwardRef(() => KitAccordionPanelComponent)) panels: QueryList<KitAccordionPanelComponent>;

  ngAfterContentInit() {
    if (this.expandFirst && !this.expandedId) {
      this.handleToggle(this.panels.first.id);
    }
  }

  ngOnInit() {
  }

  handleToggle(id: KitCollapseId) {
    this.expandedId = handleCollapseId(this.expandedId, id, this.multiple);
  }
}
