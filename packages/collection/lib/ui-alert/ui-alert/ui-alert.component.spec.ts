import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs/Subject';
import { UiAlertTitleComponent } from '../ui-alert-title/ui-alert-title.component';
import { UiAlertComponent } from './ui-alert.component';

describe('Alert/AlertComponent', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;
  let element: Element;
  let de: DebugElement;
  let alert: UiAlertComponent;
  let alertWithTitle: UiAlertComponent;
  // setup
  beforeEach(async(() =>
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule],
        declarations: [ContainerComponent, UiAlertComponent, UiAlertTitleComponent],
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
  // specs
  it('container and component instance should be created', () => {
    expect(container).toBeTruthy();
    expect(alert instanceof UiAlertComponent).toBeTruthy();
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

// Component with ui-alert
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
