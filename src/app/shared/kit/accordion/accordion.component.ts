import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-accordion',
  templateUrl: './accordion.component.html',
})
export class AccordionComponent {
  @Input() content: Content;

  constructor() {
  }
}
