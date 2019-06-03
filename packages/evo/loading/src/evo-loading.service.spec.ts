import { async } from '@angular/core/testing';
import { NavigationEnd, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import { EvoLoadingService } from './evo-loading.service';
import { EvoLoadingState } from './meta';

describe('KitLoadingService', () => {
  let service: EvoLoadingService;
  let routerMock: RouterMock;
  beforeEach(async(() => {
    routerMock = new RouterMock();
    service = new EvoLoadingService(routerMock as any);
  }));
  describe('constructor', () => {
    it(`handles navigation start`, () => {
      routerMock.events.next(new NavigationStart(1, ''));
      expect(service.global.state).toEqual(EvoLoadingState.InProgress);
    });
    it(`handles navigation end`, () => {
      routerMock.events.next(new NavigationStart(1, ''));
      routerMock.events.next(new NavigationEnd(1, '', ''));
      expect(service.global.state).toEqual(EvoLoadingState.None);
    });
  });
  describe('.progress()', () => {
    it('creates progress with passed id', () => {
      const id = 'test';
      const progress = service.progress(id);
      expect(progress.id).toEqual(id);
    });
  });
});

class RouterMock {
  events = new Subject<any>();
}
