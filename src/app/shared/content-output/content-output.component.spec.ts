import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOutputComponent } from './content-output.component';

describe('ContentOutputComponent', () => {
  let component: ContentOutputComponent;
  let fixture: ComponentFixture<ContentOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
