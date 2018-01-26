import { EventEmitter, OnChanges, SimpleChange, ViewRef } from '@angular/core';
import { async } from '@angular/core/testing';
import { KitModalRef } from './kit-modal-ref';

describe('KitModalRef', () => {
  let service: KitModalRef<any>;
  beforeEach(async(() => {
    service = new KitModalRef<any>();
    service.instance = new InstanceStub();
    service.viewRef = new ViewRefStub() as ViewRef;
  }));
  describe('.input', () => {
    const nameSample = 'field';
    const valueSample = '123';
    it('sets param to the instance', () => {
      service.input(nameSample, valueSample);
      expect(service.instance[nameSample]).toEqual(valueSample);
    });
    it('runs viewRef.markForCheck()', () => {
      const spy = spyOn(service.viewRef, 'markForCheck');
      service.input(nameSample, valueSample);
      expect(spy).toHaveBeenCalled();
    });
    it('runs instance.ngOnChanges()', () => {
      const spy = spyOn(service.instance, 'ngOnChanges');
      service.input(nameSample, valueSample);
      expect(spy).toHaveBeenCalledWith({
        [nameSample]: new SimpleChange(undefined, valueSample, false),
      });
    });
  });
  describe('.output', () => {
    it('emits event from instance', (done) => {
      const nameSample = 'field';
      const valueSample = '123';
      service.instance[nameSample] = new EventEmitter<string>();
      service.output(nameSample).subscribe((value: string) => {
        expect(value).toEqual(valueSample);
        done();
      });
      service.instance[nameSample].emit(valueSample);
    });
  });
});

class InstanceStub implements OnChanges {
  ngOnChanges() {
  }
}

class ViewRefStub {
  markForCheck() {
  }
}
