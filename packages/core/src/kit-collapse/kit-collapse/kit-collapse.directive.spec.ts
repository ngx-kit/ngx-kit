import { Component, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { KitCollapseHostService } from '../kit-collapse-host.service';
import { KitCollapseItemService } from '../kit-collapse-item.service';
import { KitCollapseDirective } from './kit-collapse.directive';

describe('KitCollapseDirective', () => {
  let fixture: ComponentFixture<any>;
  let hostMock: HostMock;
  let itemMock: ItemMock;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        KitCollapseDirective,
      ],
      providers: [
        {
          provide: KitCollapseHostService,
          useClass: HostMock,
        },
        {
          provide: KitCollapseItemService,
          useClass: ItemMock,
        },
      ],
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    hostMock = TestBed.get(KitCollapseHostService);
    itemMock = TestBed.get(KitCollapseItemService);
  });
  it('should display template if active', async(() => {
    itemMock.id = 1;
    hostMock.active.next(new Set([1]));
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
  }));
  it('should not display template if not active', async(() => {
    itemMock.id = 1;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(0);
  }));
  it('should hide if being inactive', async(() => {
    itemMock.id = 1;
    hostMock.active.next(new Set([1, 2]));
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
    hostMock.active.next(new Set([2]));
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(0);
  }));
});

@Injectable()
class HostMock {
  active = new BehaviorSubject<Set<number>>(new Set());

  get activeChanges() {
    return this.active.asObservable();
  }
}

@Injectable()
class ItemMock {
  id: number;
}

@Component({
  selector: 'test-cmp',
  template: '<span *kitCollapse>hello</span>',
})
class TestComponent {
}
