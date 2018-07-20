import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePage3DecoratorFieldComponent } from './module-page3-decorator-field.component';

describe('ModulePage3DecoratorFieldComponent', () => {
  let component: ModulePage3DecoratorFieldComponent;
  let fixture: ComponentFixture<ModulePage3DecoratorFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePage3DecoratorFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePage3DecoratorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
