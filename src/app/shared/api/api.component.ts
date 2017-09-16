import { Component, Input, OnChanges } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { ContentService } from '../../core/content.service';
import { ComponentApi, ComponentApiDoc } from '../../interfaces/content';
import { isArray } from '../utils/is-array';
import { isObject } from '../utils/is-object';
import { ApiStyle } from './api.style';
import { clone } from '../utils/clone';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  viewProviders: [
    StylerModule.forComponent(ApiStyle),
  ],
})
export class ApiComponent implements OnChanges {
  api: any;

  methods: {
    code: string;
    doc: ComponentApiDoc;
  }[] = [];

  @Input() rawApi: any;

  constructor(private content: ContentService,
              private md: MdRenderService) {
  }

  ngOnChanges() {
    // main api
    this.api = this.extractApi(clone(this.rawApi));
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

  private extractApi(api: ComponentApi) {
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
      doc.tags.forEach(t => t.value = this.md.render(t.value));
      return doc;
    } else {
      return {
        comment: null,
        tags: [],
      };
    }
  }
}
