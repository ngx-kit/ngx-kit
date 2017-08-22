import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  KitDefaultThemeDefaultParams,
  KitDefaultThemeParams,
  KitDefaultThemeService,
  KitModalComponent,
  kitTheme,
  paramsSchema,
} from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { isObject, isString } from 'util';
import { EditorService } from '../editor.service';
import { ThemeEditorStyle } from './theme-editor.style';

@Component({
  selector: 'app-theme-editor',
  templateUrl: './theme-editor.component.html',
  viewProviders: [StylerModule.forComponent(ThemeEditorStyle)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeEditorComponent implements OnInit {
  code: string;

  @ViewChild('codeModal') codeModal: KitModalComponent;

  form: FormGroup;

  overviewBackgroundColor = '#fff';

  overviewTextColor = '#333';

  schema: {name: string, schema: any}[];

  @ViewChild('setCodeModal') setCodeModal: KitModalComponent;

  themeModel: any;

  constructor(private editor: EditorService,
              @Inject(kitTheme) private themeService: KitDefaultThemeService) {
    console.log('schema', paramsSchema);
    this.schema = this.convertSchema(paramsSchema);
    this.initThemeModel(new KitDefaultThemeDefaultParams());
  }

  ngOnInit() {
  }


  getCode() {
    this.code = JSON.stringify({
      $meta: {
        overviewBackgroundColor: this.overviewBackgroundColor,
        overviewTextColor: this.overviewTextColor,
      },
      ...this.themeModel,
    });
    this.codeModal.open();
  }

  setThemeFromCode() {
    const parsed = JSON.parse(this.code);
    // @todo error handling
    this.overviewBackgroundColor = parsed['$meta']['overviewBackgroundColor'];
    this.overviewTextColor = parsed['$meta']['overviewTextColor'];
    this.initThemeModel(parsed);
    this.update();
    this.setCodeModal.close();
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
