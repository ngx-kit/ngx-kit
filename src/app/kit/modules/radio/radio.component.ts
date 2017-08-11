import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-radop',
  templateUrl: './radio.component.html',
})
export class RadioComponent implements OnInit {
  selected = 'first';

  content: Content;

  options = [
    {value: 'first', label: 'First'},
    {value: 'second', label: 'Second'},
    {value: 'third', label: 'Third'},
  ];

  simpleOptions = ['first', 'second', 'third'];

  customOptions = [
    {customValue: 'first', customLabel: 'First'},
    {customValue: 'second', customLabel: 'Second'},
    {customValue: 'third', customLabel: 'Third'},
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
    });
  }
}
