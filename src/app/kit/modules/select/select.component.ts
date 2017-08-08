import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {
  content: Content;

  objOptions = [
    {
      id: '123',
      text: '123-label',
    },
    {
      id: '456',
      text: '456-label',
    },
    {
      id: '789',
      text: '789-label',
    },
    {
      id: 'abc',
      text: 'abc-label',
    },
  ];

  options = ['123', '456', '789', 'abc'];

  selected = '123';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
    });
  }
}
