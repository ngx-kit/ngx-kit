import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent implements OnInit {
  checked = false;

  color = 'skyblue';

  content: Content;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
    });
  }
}
