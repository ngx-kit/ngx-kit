import { Component, Input, OnChanges } from '@angular/core';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { ComponentApi, ComponentApiDoc } from '../../core/content-meta';
import { ContentService } from '../../core/content.service';
import { clone } from '../utils/clone';
import { isArray } from '../utils/is-array';
import { isObject } from '../utils/is-object';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent implements OnChanges {
  api: any;

  methods: {
    name: string;
    code: string;
    doc: ComponentApiDoc;
  }[] = [];

  @Input() rawApi: any;

  constructor(
    private content: ContentService,
    private md: MdRenderService,
  ) {
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
    api.inputs = api.inputs.filter(i => i.type !== 'VoidKeyword');
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
      ...api.setProps
        .filter(m => m.doc && m.doc.tags.find(t => t.name === 'publicApi'))
        .map(m => {
          const type = m.type ? `: ${this.convertType(m.type)}` : '';
          const typeParams = m.typeParameters ? `<${m.typeParameters.join(', ')}>` : '';
          const params = m.params ? m.params.map(p => `${p.name}: ${this.convertType(p.type)}`).join(', ') : '';
          return {
            name: '___' + m.name,
            code: `set ${m.name}${typeParams}(${params})${type}`,
            doc: this.renderDoc(m.doc),
          };
        }),
      ...api.getProps
        .filter(m => m.doc && m.doc.tags.find(t => t.name === 'publicApi'))
        .map(m => {
          const type = m.type ? `: ${this.convertType(m.type)}` : '';
          return {
            name: '___' + m.name,
            code: `get ${m.name}()${type}`,
            doc: this.renderDoc(m.doc),
          }
        }),
      ...api.methods
        .filter(m => m.doc && m.doc.tags.find(t => t.name === 'publicApi'))
        .map(m => {
          const type = m.type ? `: ${this.convertType(m.type)}` : '';
          const typeParams = m.typeParameters ? `<${m.typeParameters.join(', ')}>` : '';
          const params = m.params ? m.params.map(p => `${p.name}: ${this.convertType(p.type)}`).join(', ') : '';
          return {
            name: m.name,
            code: `${m.name}${typeParams}(${params})${type}`,
            doc: this.renderDoc(m.doc),
          };
        }),
    ].sort((x, y) => x.name > y.name ? 1 : -1);
    // render params docs
    api.inputs.forEach(i => i.doc = this.renderDoc(i.doc));
    api.outputs.forEach(o => o.doc = this.renderDoc(o.doc));
    return api;
  }

  private renderDoc(doc: ComponentApiDoc): ComponentApiDoc {
    if (doc) {
      doc.comment = this.md.render(doc.comment);
      doc.tags.forEach(t => t.value = this.md.render(t.value));
      return doc;
    } else {
      return {
        comment: '',
        tags: [],
      };
    }
  }
}
