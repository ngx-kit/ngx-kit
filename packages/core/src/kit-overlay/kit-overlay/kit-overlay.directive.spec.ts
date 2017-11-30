import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KitOverlayHostComponent } from '../kit-overlay-host/kit-overlay-host.component';
import { KitOverlayModule } from '../kit-overlay.module';
import { KitOverlayDirective } from './kit-overlay.directive';

describe('KitOverlayDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [
            TestComponent,
          ],
          imports: [
            CommonModule,
            KitOverlayModule.forRoot(),
          ],
        });
  }));
  function getComponent() {
    return fixture.componentInstance;
  }
  it('should project to host', async(() => {
    fixture = createTestComponent(basicTemplate);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.host .content'))).toBeTruthy();
  }));
  it('should toggle', async(() => {
    fixture = createTestComponent(basicTemplate);
    // show
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.host .content'))).toBeTruthy();
    // hide
    getComponent().display = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.host .content'))).toBeFalsy();
    // show again
    getComponent().display = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.host .content'))).toBeTruthy();
  }));
  it('should hide if parent destroyed', async(() => {
    const template = `
      <div *ngIf="parentDisplay">
        <div *kitOverlay="display"><div class="content"></div></div>
      </div>
      <div class="host">
        <kit-overlay-host></kit-overlay-host>
      </div>
    `;
    fixture = createTestComponent(template);
    // show
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.host .content'))).toBeTruthy();
    // hide parent
    getComponent().parentDisplay = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.host .content'))).toBeFalsy();
  }));
  it('should mark for check', async(() => {
    fixture = createTestComponent(basicTemplate);
    const spy = spyOn(getComponent().dir as any, 'cdrMarkForCheck');
    fixture.detectChanges();
    getComponent().host.ngDoCheck();
    expect(spy).toHaveBeenCalled();
  }));
});

@Component({
  selector: 'test-cmp',
  template: '',
})
class TestComponent {
  @ViewChild(KitOverlayDirective) dir: KitOverlayDirective;

  display = true;

  @ViewChild(KitOverlayHostComponent) host: KitOverlayHostComponent;

  parentDisplay = true;
}

const basicTemplate = `
  <div *kitOverlay="display"><div class="content"></div></div>
  <div class="host">
    <kit-overlay-host></kit-overlay-host>
  </div>
`;
function createTestComponent(template: string): ComponentFixture<TestComponent> {
  return TestBed.overrideComponent(TestComponent, {set: {template: template}})
      .createComponent(TestComponent);
}
