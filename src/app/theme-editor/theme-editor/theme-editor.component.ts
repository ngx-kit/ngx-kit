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

  colorsModel: string[];

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

  changeColor(p: [string, string]) {
    if (p[1]) {
      if (p[0]) {
        // update colors set
        this.colorsModel = [...this.colorsModel.map(c => c === p[0] ? p[1] : c)];
        // update theme
        this.changeThemeColor(this.themeModel, p[0], p[1]);
      } else {
        // add color to set
        this.colorsModel = [...this.colorsModel, p[1]];
      }
    }
  }

  deleteColor(color: string) {
    if (color !== '') {
      this.colorsModel = this.colorsModel.filter(c => c !== color);
      console.log('del cm', this.colorsModel);
      this.changeThemeColor(this.themeModel, color, '');
    }
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

  private changeThemeColor(model: any, prev: string, curr: string) {
    Object.keys(model).forEach(key => {
      if (isObject(model[key])) {
        this.changeThemeColor(model[key], prev, curr);
      } else if (model[key] === prev) {
        model[key] = curr;
      }
    });
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

  private extractColors(themeModel: any, inColors = false) {
    return Object.keys(themeModel)
        // collect colors
        .reduce((colors: string[], key: string) => {
          return [
            ...colors,
            ...isObject(themeModel[key])
                ? this.extractColors(themeModel[key], inColors || key === 'colors')
                : [...inColors ? themeModel[key] : []],
          ];
        }, [])
        // get uniq
        .filter((item, pos, self) => self.indexOf(item) === pos);
  }

  private initThemeModel(params: KitDefaultThemeParams) {
    this.themeModel = this.themeService.mergeParams(new KitDefaultThemeDefaultParams(), params);
    this.colorsModel = this.extractColors(this.themeModel).sort((x, y) => x > y ? 1 : -1);
  }
}
