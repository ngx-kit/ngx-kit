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
          KitOverlayModule,
        ],
      });
  }));
  beforeEach(() => {
    const container = document.querySelector('.kit-overlay-container');
    if (container) {
      container.remove();
    }
  });

  function getComponent() {
    return fixture.componentInstance;
  }

  it('projects template to the host', async(() => {
    fixture = createTestComponent(basicTemplate);
    fixture.detectChanges();
    expect(document.querySelector('.kit-overlay-container .content')).toBeTruthy();
  }));
  it('should toggle', async(() => {
    fixture = createTestComponent(basicTemplate);
    // show
    fixture.detectChanges();
    expect(document.querySelector('.kit-overlay-container .content')).toBeTruthy();
    // hide
    getComponent().display = false;
    fixture.detectChanges();
    expect(document.querySelector('.kit-overlay-container .content')).toBeFalsy();
    // show again
    getComponent().display = true;
    fixture.detectChanges();
    expect(document.querySelector('.kit-overlay-container .content')).toBeTruthy();
  }));
  it('should hide if parent destroyed', async(() => {
    const template = `
      <div *ngIf="parentDisplay">
        <div *kitOverlay="display"><div class="content"></div></div>
      </div>
    `;
    fixture = createTestComponent(template);
    // show
    fixture.detectChanges();
    expect(document.querySelector('.kit-overlay-container .content')).toBeTruthy();
    // hide parent
    getComponent().parentDisplay = false;
    fixture.detectChanges();
    expect(document.querySelector('.kit-overlay-container .content')).toBeFalsy();
  }));
  it('should run CD from host', () => {
    const template = `
      <div class="local">{{ x }}</div>
      <div *kitOverlay="display"><button class="act" (click)="x = x + 1"></button></div>
    `;
    fixture = createTestComponent(template);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.local')).nativeElement.innerText).toEqual('0');
    const act = document.querySelector('.kit-overlay-container .act');
    expect(act).toBeTruthy();
    if (act) {
      act.dispatchEvent(new MouseEvent('click'));
    }
    expect(fixture.debugElement.query(By.css('.local')).nativeElement.innerText).toEqual('1');
  });
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

  x = 0;
}

const basicTemplate = `
  <div *kitOverlay="display"><div class="content"></div></div>
`;

function createTestComponent(template: string): ComponentFixture<TestComponent> {
  return TestBed.overrideComponent(TestComponent, {set: {template: template}})
    .createComponent(TestComponent);
}
