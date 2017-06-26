import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitComponent } from './kit.component';

describe('KitComponent', () => {
  let component: KitComponent;
  let fixture: ComponentFixture<KitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
