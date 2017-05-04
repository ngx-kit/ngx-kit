import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitButtonComponent } from './kit-button.component';

describe('KitButtonComponent', () => {
  let component: KitButtonComponent;
  let fixture: ComponentFixture<KitButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
