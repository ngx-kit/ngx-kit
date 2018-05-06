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
  });
});
