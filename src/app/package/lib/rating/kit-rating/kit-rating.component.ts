import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { KitClassService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'kit-rating,[kitRating]',
  template: `
    <ng-container *ngIf="icon">
      <kit-icon *kitRepeat="total; let index = index"
                [name]="icon"
                class="icon"
                [class.active]="index <= value">
      </kit-icon>
    </ng-container>
    <ng-container *ngIf="!icon">
        <span *kitRepeat="total; let index = index"
              class="icon"
              [class.active]="index <= value"
              [innerHtml]="symbol">
        </span>
    </ng-container>
  `,
  styleUrls: ['./kit-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [KitClassService],
})
export class KitRatingComponent implements OnInit, OnChanges {
  @Input() icon: string;

  @Input() kitRating: void;

  @Input() symbol = '&#x2605;';

  @Input() total = 5;

  @Input() value: number;

  constructor(private kitClass: KitClassService) {
  }

  ngOnChanges() {
    this.kitClass.apply({});
  }

  ngOnInit() {
  }
}
