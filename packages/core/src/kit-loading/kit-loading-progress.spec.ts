import { async } from '@angular/core/testing';
import { KitLoadingProgress } from './kit-loading-progress';
import { KitLoadingState } from './meta';

describe('KitLoadingProgress', () => {
  let service: KitLoadingProgress;
  const key = 'test';
  beforeEach(async(() => {
    service = new KitLoadingProgress('test');
  }));
  describe('.start()', () => {
    it('changes None state to InProgress', () => {
      service.start(key);
      expect(service.state).toEqual(KitLoadingState.InProgress);
    });
    it('emits stateChange with InProgress', (done) => {
      service.stateChanges.subscribe(state => {
        expect(state).toEqual(KitLoadingState.InProgress);
        done();
      });
      service.start(key);
    });
    it('returns end function that stops progress', () => {
      const fn = service.start(key);
      fn();
      expect(service.state).toEqual(KitLoadingState.None);
    });
  });
  describe('.end()', () => {
    beforeEach(() => {
      service.start(key);
    });
    it('changes InProgress state to None', () => {
      service.end(key);
      expect(service.state).toEqual(KitLoadingState.None);
    });
    it('emits stateChange with None', (done) => {
      service.stateChanges.subscribe(state => {
        expect(state).toEqual(KitLoadingState.None);
        done();
      });
      service.end(key);
    });
    it('forces state to None if key is not passed', () => {
      service.start('test1');
      service.start('test2');
      service.end();
      expect(service.state).toEqual(KitLoadingState.None);
    });
  });
});
