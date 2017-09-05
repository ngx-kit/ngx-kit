import { Component, Input, OnChanges } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { ContentService } from '../../core/content.service';
import { ComponentApi, ComponentApiDoc } from '../../interfaces/content';
import { clone } from '../utils/clone';
import { isArray } from '../utils/is-array';
import { isObject } from '../utils/is-object';
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

  hasMethods = false;

  hasOutputs = false;

  methods: {
    code: string;
    module: string;
    doc: ComponentApiDoc;
  }[] = [];

  selector: string;

  type: string;

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
    // get type
    this.type = this.apis[0].type;
    // get selector
    this.selector = this.apis[0].selector;
    // check inputs
    this.hasInputs = this.apis.filter(api => api.inputs.length > 0).length > 0;
    // check outputs
    this.hasOutputs = this.apis.filter(api => api.outputs.length > 0).length > 0;
    // check methods
    this.hasMethods = this.apis.filter(api => api.methods.length > 0).length > 0;
  }

  private convertType(typeKeyword: any): string {
    if (isArray(typeKeyword)) {
      return typeKeyword.map(k => this.convertType(k)).join(', ');
    } else if (isObject(typeKeyword)) {
      return `${typeKeyword['type']}<${this.convertType(typeKeyword['args'])}>`;
    } else {
      switch (typeKeyword) {
        case 'BooleanKeyword':
          return 'boolean';
        case 'StringKeyword':
          return 'string';
        case 'NumberKeyword':
          return 'number';
        case 'AnyKeyword':
          return 'any';
        case 'VoidKeyword':
          return 'void';
        default:
          return typeKeyword;
      }
    }
  }

  private extractApi(files: ComponentApi[], className: string) {
    const api: ComponentApi = clone(files.find(f => f.class === className));
    if (!api) {
      throw new Error(`${className} not found!`);
    }
    // render component doc
    api.doc = this.renderDoc(api.doc);
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
    // methods
    this.methods = [
      ...this.methods,
      ...api.methods
          .filter(m => m.doc && m.doc.tags.find(t => t.name === 'publicApi'))
          .map(m => {
            const type = m.type ? `: ${this.convertType(m.type)}` : '';
            const typeParams = m.typeParameters ? `<${m.typeParameters.join(', ')}>` : '';
            const params = m.params ? m.params.map(p => `${p.name}: ${this.convertType(p.type)}`).join(', ') : '';
            return {
              code: `${m.name}${typeParams}(${params})${type}`,
              module: api.module,
              doc: this.renderDoc(m.doc),
            };
          }),
    ];
    // render params docs
    api.inputs.forEach(i => i.doc = this.renderDoc(i.doc));
    api.outputs.forEach(o => o.doc = this.renderDoc(o.doc));
    return api;
  }

  private renderDoc(doc: ComponentApiDoc) {
    if (doc) {
      doc.comment = this.md.render(doc.comment);
      doc.tags.forEach(t => t.comment = this.md.render(t.comment));
      return doc;
    } else {
      return {
        comment: null,
        tags: [],
      };
    }
  }
}
