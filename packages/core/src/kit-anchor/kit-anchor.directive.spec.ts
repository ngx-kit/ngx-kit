import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KitAnchorDirective } from './kit-anchor.directive';

describe('Core/AnchorDirective', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;
  let element: Element;
  let de: DebugElement;
  let anchoredDiv: any;
  // setup
  beforeEach(async(() =>
      TestBed.configureTestingModule({
        declarations: [ContainerComponent, KitAnchorDirective],
      }).compileComponents(),
  ));
  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
    anchoredDiv = de.query(By.css('.anchored')).nativeElement;
    fixture.detectChanges();
  });
  // specs
  it('container should be created', () => {
    expect(container).toBeTruthy();
  });
  it('should export directive to param', () => {
    expect(container.anchorRef instanceof KitAnchorDirective).toBeTruthy();
  });
  it('anchor should return nativeEl', () => {
    expect(container.anchorRef.nativeEl).toBe(anchoredDiv);
  });
});

// Component with directive
@Component({
  selector: 'test-container',
  template: `
    <div [kitAnchor] #anchorRef="anchor" class="anchored" (hostClick)="clicks = true"></div>
  `,
})
class ContainerComponent {
  @ViewChild('anchorRef') anchorRef: KitAnchorDirective;

  clicks = false;
}
