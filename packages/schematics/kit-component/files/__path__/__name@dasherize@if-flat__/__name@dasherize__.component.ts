import { ChangeDetectionStrategy<% if(valueAccessor) { %>, ChangeDetectorRef<% } %>, Component<% if(valueAccessor) { %>, forwardRef<% } %>, OnInit } from '@angular/core';<% if(valueAccessor) { %>
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';<% } %><% if(valueAccessor) { %>
import { Subject } from 'rxjs/Subject';<% } %>
<% if(valueAccessor) { %>
export const <%= vaConst %>: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => <%= componentClass %>),
  multi: true,
};
<% } %>
@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,<% if(valueAccessor) { %>
  providers: [<%= vaConst %>],<% } %>
})
export class <%= componentClass %> implements OnInit<% if(valueAccessor) { %>, ControlValueAccessor<% } %> {<% if(valueAccessor) { %>
  private changes$ = new Subject<any>();

  private disabled = false;

  private state: any;

  private touches$ = new Subject<void>();
<% } %>
  constructor(<% if(valueAccessor) { %>private cdr: ChangeDetectorRef<% } %>) {
  }

  ngOnInit() {
  }
<% if(valueAccessor) { %>
  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(rawValue: any): void {
    this.state = rawValue;
    this.cdr.markForCheck();
  }
<% } %>}
