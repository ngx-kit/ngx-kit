import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KitKeymapDirective } from './kit-keymap.directive';
import { KitKeymapService } from './kit-keymap.service';
import { KitKeymapModule } from './kit-keymap.module';

describe('KitKeymapDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let service: ControlServiceMock;
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          providers: [
            {
              provide: KitKeymapService,
              useClass: ControlServiceMock,
            },
          ],
          declarations: [
            TestComponent,
          ],
          imports: [
            CommonModule,
            KitKeymapModule,
          ],
        });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    service = TestBed.get(KitKeymapService);
  });

  function getComponent() {
    return fixture.componentInstance;
  }

  it('should register in service', async(() => {
    const spy = spyOn(service, 'register');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));
  it('should return nativeEl', async(() => {
    const div = fixture.debugElement.query(By.css('div'));
    expect(div.nativeElement).toEqual(getComponent().directive.nativeEl);
  }));
});

class ControlServiceMock {
  register() {
  }
}

@Component({
  selector: 'test-cmp',
  template: '<div kitKeymap></div>',
})
class TestComponent {
  @ViewChild(KitKeymapDirective) directive: KitKeymapDirective;
}
