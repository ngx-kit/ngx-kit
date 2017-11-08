import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { KitClassService } from '@ngx-kit/core';

@Component({
  selector: 'ui-rating',
  templateUrl: './ui-rating.component.html',
  styleUrls: ['./ui-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [KitClassService],
})
export class UiRatingComponent implements OnInit, OnChanges {
  @Input() icon: string;

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
