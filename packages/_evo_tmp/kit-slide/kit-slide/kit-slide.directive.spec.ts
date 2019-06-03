import { Component, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { KitSlideHostService } from '../kit-slide-host.service';
import { KitSlideDirective } from './kit-slide.directive';

describe('KitSlideDirective', () => {
  let fixture: ComponentFixture<any>;
  let hostMock: HostMock;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        KitSlideDirective,
      ],
      providers: [
        {
          provide: KitSlideHostService,
          useClass: HostMock,
        },
      ],
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    hostMock = TestBed.get(KitSlideHostService);
  });
  it('should display template if active', async(() => {
    hostMock.active.next(1);
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
  }));
  it('should hide if inactive', async(() => {
    hostMock.active.next(1);
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
    hostMock.active.next(2);
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(0);
  }));
  // @todo should generate id if not set
  // @todo should add id on init
  // @todo should remove id on destroy
});

@Injectable()
class HostMock {
  active = new BehaviorSubject<number | null>(null);

  get activeChanges() {
    return this.active.asObservable();
  }

  addId() {
  }

  deleteId() {
  }

  genId() {
  }
}

@Component({
  selector: 'test-cmp',
  template: `
    <span *kitSlide="1">hello</span>
  `,
})
class TestComponent {
}
