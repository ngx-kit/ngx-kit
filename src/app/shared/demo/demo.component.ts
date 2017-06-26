import { Component, Input, OnInit } from '@angular/core';

import { ContentFile } from '../../interfaces/content';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Input() content: ContentFile;

  constructor() { }

  ngOnInit() {
  }

}
