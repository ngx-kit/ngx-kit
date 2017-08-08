import { Component, Inject, OnInit } from '@angular/core';
import { KitDefaultThemeService, kitTheme } from '@ngx-kit/ngx-kit';
import { EditorService } from '../../editor.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  constructor(private editor: EditorService,
              @Inject(kitTheme) private kitThemeService: KitDefaultThemeService) {
  }

  ngOnInit() {
    this.editor.params$.subscribe(params => {
      if (params) {
        console.log('editor params', params);
        this.kitThemeService.applyParams(params);
      }
    });
  }
}
