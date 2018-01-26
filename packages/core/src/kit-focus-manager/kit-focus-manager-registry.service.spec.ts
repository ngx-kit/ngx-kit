import { async } from '@angular/core/testing';
import { KitFocusManagerRegistryService } from './kit-focus-manager-registry.service';
import { KitFocusManagerService } from './kit-focus-manager.service';

describe('KitFocusManagerRegistryService', () => {
  let service: KitFocusManagerRegistryService;
  beforeEach(async(() => {
    service = new KitFocusManagerRegistryService();
  }));
  describe('.capture()', () => {
    it('sets onHold all non-top managers', () => {
      const manager1 = new StubManager();
      const manager2 = new StubManager();
      const manager3 = new StubManager();
      service.capture(manager1 as KitFocusManagerService);
      service.capture(manager2 as KitFocusManagerService);
      service.capture(manager3 as KitFocusManagerService);
      expect(manager1.onHold).toBeTruthy();
      expect(manager2.onHold).toBeTruthy();
      expect(manager3.onHold).toBeFalsy();
    });
  });
  describe('.release()', () => {
    it('removes onHold from top manager', () => {
      const manager1 = new StubManager();
      const manager2 = new StubManager();
      service.capture(manager1 as KitFocusManagerService);
      service.capture(manager2 as KitFocusManagerService);
      expect(manager1.onHold).toBeTruthy();
      service.release(manager2 as KitFocusManagerService);
      expect(manager1.onHold).toBeFalsy();
    });
  });
});

class StubManager {
  onHold = false;
}
