import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../module-page.css'],
})
export class FormComponent implements OnInit {
  content: Content;

  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.form = this.fb.group({
      'name': [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
    });
  }
}
