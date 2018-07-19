import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePage3Component } from './module-page3.component';

describe('ModulePage3Component', () => {
  let component: ModulePage3Component;
  let fixture: ComponentFixture<ModulePage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
