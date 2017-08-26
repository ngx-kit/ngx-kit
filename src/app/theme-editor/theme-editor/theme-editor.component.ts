import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import {
  KitDefaultThemeDefaultParams,
  KitDefaultThemeParams,
  KitDefaultThemeService,
  kitTheme,
  paramsSchema,
} from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { isString } from 'util';
import { LayoutStyle } from '../../shared/layout/layout.style';
import { EditorService } from '../editor.service';
import { ThemeEditorStyle } from './theme-editor.style';

@Component({
  selector: 'app-theme-editor',
  templateUrl: './theme-editor.component.html',
  viewProviders: [
    StylerModule.forComponent(LayoutStyle),
    StylerModule.forComponent(ThemeEditorStyle),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeEditorComponent implements OnInit {
  code: string;

  getCodeModalOpened = false;

  schema: {name: string, schema: any}[];

  setCodeModalOpened = false;

  themeModel: any;

  constructor(private editor: EditorService,
              @Inject(kitTheme) private themeService: KitDefaultThemeService) {
    console.log('schema', paramsSchema);
    this.schema = this.convertSchema(paramsSchema);
    this.initThemeModel(new KitDefaultThemeDefaultParams());
  }

  ngOnInit() {
    this.update();
  }

  getCode() {
    this.code = JSON.stringify(this.themeModel);
    this.getCodeModalOpened = true;
  }

  setThemeFromCode() {
    const parsed = JSON.parse(this.code);
    // @todo error handling
    this.initThemeModel(parsed);
    this.update();
    this.setCodeModalOpened = false;
  }

  update() {
    this.editor.params = this.themeModel;
  }

  private convertSchema(schema) {
    return Object.keys(schema).map(key => {
      return isString(schema[key])
          ? {
            name: key,
            type: 'input',
            input: schema[key],
          }
          : {
            name: key,
            type: 'block',
            schema: this.convertSchema(schema[key]),
          };
    });
  }

  private initThemeModel(params: KitDefaultThemeParams) {
    this.themeModel = this.themeService.mergeParams(new KitDefaultThemeDefaultParams(), params);
  }
}
