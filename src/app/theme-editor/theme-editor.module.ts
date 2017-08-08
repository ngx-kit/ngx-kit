import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitFullModule, } from '@ngx-kit/ngx-kit';
import { SharedModule } from '../shared/shared.module';
import { BlockComponent } from './block/block.component';
import { ColorsBlockComponent } from './colors-block/colors-block.component';
import { EditorService } from './editor.service';
import { OverviewModule } from './overview/overview.module';
import { ThemeEditorRoutingModule } from './theme-editor-routing.module';
import { ThemeEditorComponent } from './theme-editor/theme-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ThemeEditorRoutingModule,
    KitFullModule,
    OverviewModule,
  ],
  declarations: [
    ThemeEditorComponent,
    BlockComponent,
    ColorsBlockComponent,
  ],
  providers: [
    EditorService,
  ],
})
export class ThemeEditorModule {
}
