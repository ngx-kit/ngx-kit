import { Component, Input, OnInit } from '@angular/core';
import { ContentFile } from '../../interfaces/content';

@Component({
  selector: 'app-content-output',
  templateUrl: './content-output.component.html',
  styleUrls: ['./content-output.component.css']
})
export class ContentOutputComponent implements OnInit {

  @Input() content: ContentFile;

  constructor() { }

  ngOnInit() {
  }

}
