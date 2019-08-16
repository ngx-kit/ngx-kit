import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { EvoCheckModule } from './evo-check.module';

describe('KitCheckDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          TestComponent,
        ],
        imports: [
          CommonModule,
          FormsModule,
          EvoCheckModule,
        ],
      });
  }));

  function getComponent() {
    return fixture.componentInstance;
  }

  it('[check] should toggle ngModel on click', async(() => {
    fixture = createTestComponent(checkTemplate);
    fixture.detectChanges();
    expect(getComponent().checkModel).toBeFalsy();
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    expect(getComponent().checkModel).toBeTruthy();
  }));
  it('[radio] should change ngModel on click', async(() => {
    fixture = createTestComponent(radioTemplate);
    fixture.detectChanges();
    expect(getComponent().radioModel).toEqual('a');
    const button = fixture.debugElement.query(By.css('.set-b'));
    button.nativeElement.click();
    expect(getComponent().radioModel).toEqual('b');
  }));
  // @todo should add "checked" class
  // @todo should add custom checked class (by param checkedClass="custom")
  // @todo should get touched
  // @todo should get disabled
});

@Component({
  selector: 'test-cmp',
  template: '',
})
class TestComponent {
  checkModel = false;

  radioModel = 'a';
}

const checkTemplate = `
  <button kitCheck [(ngModel)]="checkModel">Clickme</button>
`;
const radioTemplate = `
  <button kitCheck value="a" [(ngModel)]="radioModel" class="set-a">set a</button>
  <button kitCheck value="b" [(ngModel)]="radioModel" class="set-b">set b</button>
`;

function createTestComponent(template: string): ComponentFixture<TestComponent> {
  return TestBed.overrideComponent(TestComponent, {set: {template: template}})
    .createComponent(TestComponent);
}
