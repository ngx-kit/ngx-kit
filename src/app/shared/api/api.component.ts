import { Component, Input, OnChanges } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { ContentService } from '../../core/content.service';
import { ComponentApi } from '../../interfaces/content';
import { clone } from '../utils/clone';
import { ApiStyle } from './api.style';

@Component({
  selector: 'app-kit-api',
  templateUrl: './api.component.html',
  viewProviders: [
    StylerModule.forComponent(ApiStyle),
  ],
})
export class ApiComponent implements OnChanges {
  apis: ComponentApi[] = [];

  @Input() className: string;

  @Input() extenderClassName: string;

  hasInputs = false;

  hasOutputs = false;

  selector: string;

  constructor(private content: ContentService,
              private md: MdRenderService) {
  }

  ngOnChanges() {
    // main api
    this.apis = [this.extractApi(this.content.api$.value.files, this.className)];
    // add extenders
    if (this.extenderClassName) {
      this.apis.push(this.extractApi(this.content.api$.value.files, this.extenderClassName));
    }
    // get selector
    this.selector = this.apis[0].selector;
    // check inputs
    this.hasInputs = this.apis.filter(api => api.inputs.length > 0).length > 0;
    // check outputs
    this.hasOutputs = this.apis.filter(api => api.outputs.length > 0).length > 0;
  }

  private convertType(typeKeyword: string): string {
    switch (typeKeyword) {
      case 'BooleanKeyword':
        return 'boolean';
      case 'StringKeyword':
        return 'string';
      case 'NumberKeyword':
        return 'number';
      case 'AnyKeyword':
        return 'any';
      default:
        return typeKeyword;
    }
  }

  private extractApi(files: ComponentApi[], className: string) {
    const api: ComponentApi = clone(files.find(f => f.class === className));
    if (!api) {
      throw new Error(`${className} not found!`);
    }
    // render component doc
    api.doc = this.md.render(api.doc);
    // filter stub input
    api.inputs = api.inputs.filter(i => i.type !== 'NullKeyword');
    // auto-implicit type
    api.inputs = api.inputs.map(i => {
      i.type = i.type
          ? this.convertType(i.type)
          : typeof i.default;
      return i;
    });
    api.outputs = api.outputs.map(o => {
      o.type = this.convertType(o.type[0]);
      return o;
    });
    // render params docs
    api.inputs.forEach(i => i.doc = this.md.render(i.doc));
    api.outputs.forEach(i => i.doc = this.md.render(i.doc));
    return api;
  }
}
