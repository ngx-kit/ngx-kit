import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePage3ClassDeclarComponent } from './module-page3-class-declar.component';

describe('ModulePage3ClassDeclarComponent', () => {
  let component: ModulePage3ClassDeclarComponent;
  let fixture: ComponentFixture<ModulePage3ClassDeclarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePage3ClassDeclarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePage3ClassDeclarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
