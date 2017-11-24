import { async } from '@angular/core/testing';
import { KitBrowserEventManagerService } from '../../src/kit-platform-browser/event-manager/kit-browser-event-manager.service';
import createSpy = jasmine.createSpy;

describe('KitBrowserEventManagerService', () => {
  let service: KitBrowserEventManagerService;
  beforeEach(async(() => {
    service = new KitBrowserEventManagerService();
  }));
  it('should listen global event', () => {
    const spy = createSpy('listener');
    service.listenGlobal('click', spy);
    window.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalled();
  });
});
