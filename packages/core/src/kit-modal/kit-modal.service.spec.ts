import { async } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { KitModalBackdropComponent } from './kit-modal-backdrop/kit-modal-backdrop.component';
import { KitModalService } from './kit-modal.service';

describe('KitModalService', () => {
  let service: KitModalService;
  let overlayStub: OverlayStub;
  let emStub: EventManagerStub;
  let documentStub: DocumentStub;
  let platformStub: PlatformStub;
  beforeEach(async(() => {
    overlayStub = new OverlayStub();
    emStub = new EventManagerStub();
    documentStub = new DocumentStub();
    platformStub = new PlatformStub();
  }));

  function createService(options = {}) {
    service = new KitModalService(
      overlayStub as any,
      emStub as any,
      options as any,
      documentStub as any,
      platformStub as any,
      null as any,
      null as any,
    );
  }

  describe('.show()', () => {
    it('calls OverlayService.hostComponent()', () => {
      const spy = spyOn(overlayStub, 'hostComponent').and.callThrough();
      createService();
      service.show({component: ModalStub});
      expect(spy).toHaveBeenCalled();
    });
    it('returns ref with instance', () => {
      createService();
      const ref = service.show({component: ModalStub});
      expect(ref.instance).toEqual(overlayStub.componentRef.componentRef.instance);
    });
  });
  describe('param "backdropClose"', () => {
    it('=true closes modal on backdrop close', () => {
      createService({backdropClose: true});
      service.show({component: ModalStub});
      const spy = spyOn(overlayStub.componentRef.componentRef, 'destroy');
      overlayStub.backdropRef.componentRef.instance.close.next();
      expect(spy).toHaveBeenCalled();
    });
    it('=false does not close modal on backdrop close', () => {
      createService({backdropClose: false});
      service.show({component: ModalStub});
      const spy = spyOn(overlayStub.componentRef.componentRef, 'destroy');
      overlayStub.backdropRef.componentRef.instance.close.next();
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });
  describe('param "escClose"', () => {
    it('=true closes modal on esc press', () => {
      createService({escClose: true});
      service.show({component: ModalStub});
      const spy = spyOn(overlayStub.componentRef.componentRef, 'destroy');
      emStub.listener({key: 'Escape'});
      expect(spy).toHaveBeenCalled();
    });
    it('=false does not close modal on esc press', () => {
      createService({escClose: false});
      service.show({component: ModalStub});
      const spy = spyOn(overlayStub.componentRef.componentRef, 'destroy');
      emStub.listener({key: 'Escape'});
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });
});

class OverlayStub {
  backdropRef = new ComponentRefStub();

  componentRef = new ComponentRefStub();

  hostComponent(options: any) {
    if (options.component === KitModalBackdropComponent) {
      return this.backdropRef;
    } else {
      return this.componentRef;
    }
  }

  moveUnder() {
  }
}

class ComponentRefStub {
  componentRef = {
    instance: {
      close: new Subject(),
    },
    destroy: () => {
    },
  };

  input() {
  }
}

class EventManagerStub {
  listener: any;

  listenGlobal(event: string, listener: any) {
    this.listener = listener;
  }
}

class DocumentStub {
  body = {
    style: {
      removeProperty: () => {
      },
      overflow: '',
    },
  };
}

class PlatformStub {
  isBrowser() {
    return true;
  }
}

class ModalStub {
}
