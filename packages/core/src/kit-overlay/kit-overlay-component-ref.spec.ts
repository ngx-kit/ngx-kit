import { SimpleChange } from '@angular/core';
import { async } from '@angular/core/testing';
import { KitOverlayComponentRef } from './kit-overlay-component-ref';

describe('KitOverlayComponentRef', () => {
  let service: KitOverlayComponentRef<any>;
  let componentRef: ComponentRefStub;
  beforeEach(async(() => {
    componentRef = new ComponentRefStub();
    service = new KitOverlayComponentRef<any>();
    service.componentRef = componentRef as any;
  }));
  describe('.input', () => {
    const nameSample = 'field';
    const valueSample = '123';
    it('sets param to the instance', () => {
      service.input({[nameSample]: valueSample});
      expect(componentRef.instance[nameSample]).toEqual(valueSample);
    });
    it('runs changeDetectorRef.detectChanges()', () => {
      const spy = spyOn(componentRef.changeDetectorRef, 'detectChanges');
      service.input({[nameSample]: valueSample});
      expect(spy).toHaveBeenCalled();
    });
    it('runs instance.ngOnChanges()', () => {
      const spy = spyOn(componentRef.instance, 'ngOnChanges');
      service.input({[nameSample]: valueSample});
      expect(spy).toHaveBeenCalledWith({
        [nameSample]: new SimpleChange(undefined, valueSample, false),
      });
    });
  });
});

class ComponentRefStub {
  instance = {
    ngOnChanges: () => {
    },
  };

  changeDetectorRef = {
    detectChanges: () => {
    },
  };

  injector = {
    get() {
      return {
        detectChanges: () => {
        },
      };
    },
  };
}
