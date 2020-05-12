import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoStyle } from './evo-style';

describe('KitStyleService', () => {
  let fixture: ComponentFixture<TestComponent>;
  let service: EvoStyle;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
      ],
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    service = fixture.componentInstance.service;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should set styles', () => {
    const styles = {background: 'red'};
    service.style = styles;
    expect(fixture.nativeElement.style.background).toBe(styles.background);
  });
  it('should remove styles', () => {
    const styles = {background: 'red'};
    service.style = styles;
    expect(fixture.nativeElement.style.background).toBe(styles.background);
    service.style = {};
    expect(fixture.nativeElement.style.background).toBe('');
  });
});

@Component({
  selector: 'test-cmp',
  template: ``,
  providers: [
    EvoStyle,
  ],
})
class TestComponent {
  constructor(public service: EvoStyle) {
  }
}
