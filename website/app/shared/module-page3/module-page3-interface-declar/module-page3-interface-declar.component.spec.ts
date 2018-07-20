import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePage3InterfaceDeclarComponent } from './module-page3-interface-declar.component';

describe('ModulePage3InterfaceDeclarComponent', () => {
  let component: ModulePage3InterfaceDeclarComponent;
  let fixture: ComponentFixture<ModulePage3InterfaceDeclarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePage3InterfaceDeclarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePage3InterfaceDeclarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
