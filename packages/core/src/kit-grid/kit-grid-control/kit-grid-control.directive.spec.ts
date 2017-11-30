import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KitGridControlDirective } from './kit-grid-control.directive';
import { KitGridControlService } from './kit-grid-control.service';
import { KitGridModule } from '../kit-grid.module';

describe('KitGridControlDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let service: ControlServiceMock;
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          providers: [
            {
              provide: KitGridControlService,
              useClass: ControlServiceMock,
            },
          ],
          declarations: [
            TestComponent,
          ],
          imports: [
            CommonModule,
            KitGridModule,
          ],
        });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    service = TestBed.get(KitGridControlService);
  });

  function getComponent() {
    return fixture.componentInstance;
  }

  it('should register in KitGridControlService', async(() => {
    const spy = spyOn(service, 'registerGrid');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));
  it('should return nativeEl', async(() => {
    const div = fixture.debugElement.query(By.css('div'));
    expect(div.nativeElement).toEqual(getComponent().directive.nativeEl);
  }));
});

class ControlServiceMock {
  registerGrid() {
  }
}

@Component({
  selector: 'test-cmp',
  template: '<div kitGridControl></div>',
})
class TestComponent {
  @ViewChild(KitGridControlDirective) directive: KitGridControlDirective;
}
