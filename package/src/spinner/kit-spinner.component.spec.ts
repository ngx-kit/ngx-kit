import { Component, DebugElement, Directive, Injectable, Input, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StylerComponent } from '@ngx-kit/styler';
import { kitSpinnerStyle } from '../core/meta/tokens';
import { KitSpinnerComponent } from './kit-spinner.component';

describe('Spinner/SpinnerComponent', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;
  let element: Element;
  let de: DebugElement;
  // setup
  beforeEach(async(() =>
      TestBed.configureTestingModule({
        declarations: [StylerDirective, ContainerComponent, KitSpinnerComponent],
        providers: [
          {
            provide: kitSpinnerStyle,
            useClass: StyleMock,
          },
        ],
      }).overrideComponent(KitSpinnerComponent, {
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
    expect(container.instance instanceof KitSpinnerComponent).toBeTruthy();
  });
});

// Component with kit-spinner
@Component({
  selector: 'test-container',
  template: `
    <kit-spinner></kit-spinner>
  `,
})
class ContainerComponent {
  @ViewChild(KitSpinnerComponent) instance: KitSpinnerComponent;
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
