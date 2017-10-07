import { Component, DebugElement, Directive, Injectable, Input } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitAlertTitleComponent } from '../kit-alert-title/kit-alert-title.component';
import { KitAlertComponent } from './kit-alert.component';

describe('Alert/AlertComponent', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;
  let element: Element;
  let de: DebugElement;
  let styler: StylerMock;
  let stylerForTitle: StylerMock;
  let alert: KitAlertComponent;
  let alertWithTitle: KitAlertComponent;
  // setup
  beforeEach(async(() =>
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule],
        declarations: [StylerDirective, ContainerComponent, KitAlertComponent, KitAlertTitleComponent],
        providers: [
          {
            provide: 'styler',
            useClass: StylerMock,
          },
          {
            provide: 'stylerForTitle',
            useClass: StylerMock,
          },
        ],
      }).overrideComponent(KitAlertComponent, {
        set: {
          viewProviders: [
            {
              provide: StylerComponent,
              useExisting: 'styler',
            },
          ],
        },
      }).overrideComponent(KitAlertTitleComponent, {
        set: {
          viewProviders: [
            {
              provide: StylerComponent,
              useExisting: 'stylerForTitle',
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
    alert = de.children[0].componentInstance;
    alertWithTitle = de.children[1].componentInstance;
    fixture.detectChanges();
  });
  beforeEach(inject(['styler', 'stylerForTitle'],
      (stylerMock: StylerMock, stylerForTitleMock: StylerMock) => {
        styler = stylerMock;
        stylerForTitle = stylerForTitleMock;
      }));
  // specs
  it('container and component instance should be created', () => {
    expect(container).toBeTruthy();
    expect(alert instanceof KitAlertComponent).toBeTruthy();
  });
  it('should display message', () => {
    const message = 'text';
    container.message = message;
    fixture.detectChanges();
    const alertDiv = de.query(By.css('.alert'));
    expect(alertDiv.nativeElement.textContent.trim()).toEqual(message);
  });
  it('should display closing link', () => {
    container.closable = true;
    fixture.detectChanges();
    const closingLink = de.query(By.css('button'));
    expect(closingLink).toBeTruthy();
  });
  it('show change closing link text', () => {
    const closeText = 'text';
    container.closable = true;
    container.closeText = closeText;
    fixture.detectChanges();
    const closingLink = de.query(By.css('button'));
    expect(closingLink.nativeElement.textContent.trim()).toEqual(closeText);
  });
  it('should emit close event on close', (done: DoneFn) => {
    container.closeEvent.subscribe(e => {
      expect(e).toBeNull();
      done();
    });
    container.closable = true;
    fixture.detectChanges();
    const closingLink = de.query(By.css('button'));
    closingLink.nativeElement.click();
  });
});

// Component with kit-alert
@Component({
  selector: 'test-container',
  template: `
    <ui-alert [closable]="closable"
              [closeText]="closeText"
              (close)="closeEvent.next($event)"
              class="alert">
      {{ message }}
    </ui-alert>
    <ui-alert>
      <ui-alert-title></ui-alert-title>
    </ui-alert>
  `,
})
class ContainerComponent {
  closable = false;

  closeEvent = new Subject<null>();

  closeText = '';

  message = '';
}

@Injectable()
class StylerMock {
  host = {
    state: {
      closed: false,
    },
    applyState: (state: any) => {
      this.host.state = {...this.host.state, ...state};
    },
  };

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

  @Input() stylerState: any;
}
