import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KitAnchorDirective } from './anchor.directive';

@Component({
  selector: 'container',
  template: `
    <div [kitAnchor] #anchorRef="anchor"></div>
  `,
})
class ContainerComponent {
  @ViewChild('anchorRef') anchorRef: KitAnchorDirective;
}

describe('Core/AnchorDirective', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;
  let element: Element;
  let de: DebugElement;
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
    fixture.detectChanges();
  });
  // specs
  it('container should be created', () => {
    expect(container).toBeTruthy();
  });
  it('should export directive to param', () => {
    expect(container.anchorRef instanceof KitAnchorDirective).toBeTruthy();
  });
//  it('should emit click', async(() => {
//    const div = de.query(By.directive(KitAnchorDirective));
//
//    div.nativeElement.click();
//  }));
});