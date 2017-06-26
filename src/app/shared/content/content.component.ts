import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ContentFile } from '../../interfaces/content';

@Component({
  selector: 'app-kit-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  content$: Observable<ContentFile>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.content$ = this.route.data
        .map(data => data.content.find(file => file.meta.id === 'content'));
  }

}
