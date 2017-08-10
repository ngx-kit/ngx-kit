import { AfterViewChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KitDefaultThemeDefaultParams, paramsSchema } from '@ngx-kit/ngx-kit';
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
  colorsModel: string[];

  form: FormGroup;

  schema: {name: string, schema: any}[];

  themeModel: any;

  constructor(private editor: EditorService) {
    this.schema = this.convertSchema(paramsSchema);
    this.themeModel = new KitDefaultThemeDefaultParams();
    this.colorsModel = this.extractColors(this.themeModel).sort((x, y) => x > y ? 1 : -1);
  }

  ngOnInit() {
  }

  changeColor(p: [string, string]) {
    // update colors set
    this.colorsModel = [...this.colorsModel.map(c => c === p[0] ? p[1] : c)];
    // update theme
    this.changeThemeColor(this.themeModel, p[0], p[1]);
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
}
