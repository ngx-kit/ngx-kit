import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  forwardRef,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { KitTabsPanelComponent } from '../kit-tabs-panel/kit-tabs-panel.component';

@Component({
  selector: 'kit-tabs,[kitTabs]',
  templateUrl: './kit-tabs.component.html',
  styleUrls: ['./kit-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitTabsComponent implements OnInit {
  active = 0;

  @Input() firstActivate = true;

  @Input() kitTabs: null;

  panelRef: TemplateRef<any> | null;

  slideAnimation: 'slide-right' | 'slide-left' = 'slide-left';

  @ContentChildren(forwardRef(() => KitTabsPanelComponent)) tabs: QueryList<KitTabsPanelComponent>;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  setActive(index: number) {
    this.slideAnimation = index < this.active ? 'slide-right' : 'slide-left';
    setTimeout(() => {
      this.active = index;
      this.cdr.markForCheck();
    }, 1);
  }
}
