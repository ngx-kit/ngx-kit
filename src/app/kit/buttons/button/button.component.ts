import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { ContentFile } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  content$: Observable<ContentFile>;
  demoMain$: Observable<ContentFile>;
  demoTypes$: Observable<ContentFile>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.content$ = this.route.data
        .map(data => data.content.find(file => file.meta.id === 'content'));
    this.demoMain$ = this.route.data
        .map(data => data.content.find(file => file.meta.id === 'demo-main'));
    this.demoTypes$ = this.route.data
        .map(data => data.content.find(file => file.meta.id === 'demo-types'));
  }

}
