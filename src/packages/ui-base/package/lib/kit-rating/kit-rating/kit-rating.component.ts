import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { KitClassService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'kit-rating',
  templateUrl: './kit-rating.component.html',
  styleUrls: ['./kit-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [KitClassService],
})
export class KitRatingComponent implements OnInit, OnChanges {
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
