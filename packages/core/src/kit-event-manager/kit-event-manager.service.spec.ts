import { async } from '@angular/core/testing';
import { KitEventManagerService } from './kit-event-manager.service';
import createSpy = jasmine.createSpy;

describe('KitEventManagerService', () => {
  let service: KitEventManagerService;
  beforeEach(async(() => {
    service = new KitEventManagerService(new PlatformStub() as any);
  }));
  it('should listen global event', () => {
    const spy = createSpy('listener');
    service.listenGlobal('click', spy);
    window.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalled();
  });
});

class PlatformStub {
  isBrowser() {
    return true;
  }
}
