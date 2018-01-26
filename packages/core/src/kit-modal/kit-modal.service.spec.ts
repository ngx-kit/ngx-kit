import { async } from '@angular/core/testing';
import { Subject } from 'rxjs/Subject';
import { keyEscape } from '../kit-event-manager/meta';
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
      options,
      documentStub as any,
      platformStub as any,
    );
  }

  describe('.show()', () => {
    it('returns ref with instance', () => {
      createService();
      const ref = service.show(ModalStub);
      expect(ref.instance).toEqual(overlayStub.componentRef.instance);
    });
  });
  describe('param "backdropClose"', () => {
    it('=true closes modal on backdrop click', () => {
      createService({backdropClose: true});
      service.show(ModalStub);
      const spy = spyOn(overlayStub.componentRef, 'destroy');
      overlayStub.backdropRef.instance.click.next();
      expect(spy).toHaveBeenCalled();
    });
    it('=false does not close modal on backdrop click', () => {
      createService({backdropClose: false});
      service.show(ModalStub);
      const spy = spyOn(overlayStub.componentRef, 'destroy');
      overlayStub.backdropRef.instance.click.next();
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });
  describe('param "escClose"', () => {
    it('=true closes modal on esc press', () => {
      createService({escClose: true});
      service.show(ModalStub);
      const spy = spyOn(overlayStub.componentRef, 'destroy');
      emStub.listener({keyCode: keyEscape});
      expect(spy).toHaveBeenCalled();
    });
    it('=false does not close modal on esc press', () => {
      createService({escClose: false});
      service.show(ModalStub);
      const spy = spyOn(overlayStub.componentRef, 'destroy');
      emStub.listener({keyCode: keyEscape});
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });
});

class OverlayStub {
  backdropRef = new ComponentRefStub();

  componentRef = new ComponentRefStub();

  hostComponent(cpm: any) {
    if (cpm === KitModalBackdropComponent) {
      return this.backdropRef;
    } else {
      return this.componentRef;
    }
  }

  moveUnder() {
  }
}

class ComponentRefStub {
  instance = {
    click: new Subject(),
  };

  destroy() {
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
