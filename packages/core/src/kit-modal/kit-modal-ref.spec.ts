import { SimpleChange, ViewRef } from '@angular/core';
import { async } from '@angular/core/testing';
import { KitModalRef } from './kit-modal-ref';

describe('KitModalRef', () => {
  let ref: KitModalRef<any>;
  beforeEach(async(() => {
    ref = new KitModalRef<any>();
    ref.componentRef = new ComponentRefSub() as any;
    ref.viewRef = new ViewRefStub() as ViewRef;
  }));
  describe('.input', () => {
    it('passes input to the ref', () => {
      const input = {sample: 123};
      const spy = spyOn(ref.componentRef, 'input');
      ref.input(input);
      expect(spy).toHaveBeenCalledWith(input);
    });
  });
});

class ComponentRefSub {
  componentRef = {};

  input() {
  }
}

class ViewRefStub {
  markForCheck() {
  }
}
