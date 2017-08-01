import { Component, DebugElement, Directive, Injectable, Input, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentSpinner } from '../core/meta/tokens';
import { KitAlertComponent } from './kit-alert.component';

describe('Spinner/SpinnerComponent', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;
  let element: Element;
  let de: DebugElement;
  // setup
  beforeEach(async(() =>
      TestBed.configureTestingModule({
        declarations: [StylerDirective, ContainerComponent, KitAlertComponent],
        providers: [
          {
            provide: kitComponentSpinner,
            useClass: StyleMock,
          },
        ],
      }).overrideComponent(KitAlertComponent, {
        set: {
          viewProviders: [
            {
              provide: StylerComponent,
              useClass: StylerMock,
            },
          ],
        },
      }).compileComponents(),
  ));
  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
    fixture.detectChanges();
  });
  // specs
  it('container and component instance should be created', () => {
    expect(container).toBeTruthy();
    expect(container.instance instanceof KitAlertComponent).toBeTruthy();
  });
});

// Component with kit-spinner
@Component({
  selector: 'container',
  template: `
    <kit-spinner></kit-spinner>
  `,
})
class ContainerComponent {
  @ViewChild(KitAlertComponent) instance: KitAlertComponent;
}

@Injectable()
class StylerMock {
  register(style: any) {
  }
}

@Injectable()
class StyleMock {
}

@Directive({
  selector: '[styler]',
})
export class StylerDirective {
  @Input() styler: any;
}
