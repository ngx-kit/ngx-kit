import { AfterContentInit, Component, ContentChildren, HostBinding, Input, OnInit, QueryList } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitAccordionService } from '../kit-accordion.service';
import { KitAccordionPanelComponent } from '../kit-accordion-panel/kit-accordion-panel.component';

@Component({
  selector: 'kit-accordion',
  template: `
    <ng-content></ng-content>
  `,
})
export class KitAccordionComponent implements OnInit, AfterContentInit {

  @Input() firstActivate = true;
  @Input() multiple = false;

  @HostBinding('class') hostClass: string;

  @ContentChildren(KitAccordionPanelComponent) panels: QueryList<KitAccordionPanelComponent>;

  constructor(private core: KitCoreService,
              private service: KitAccordionService) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
  }

  ngAfterContentInit() {
    this.activateFirst();
    this.subscribeOnActivations();
  }

  calcStyles() {
    const theme = this.service.getTheme();
    this.hostClass = style(
        theme.host.base,
    );
  }

  private compileStyles() {
  }

  private activateFirst() {
    if (this.firstActivate) {
      if (!this.panels.find(p => p.active)) {
        this.panels.first.active = true;
      }
    }
  }

  private subscribeOnActivations() {
    this.panels.forEach(p => p.activate.subscribe(() => {
      if (!this.multiple) {
        this.panels.filter(pa => pa !== p).forEach(pb => {
          pb.active = false;
        });
      }
    }));
  }

}
