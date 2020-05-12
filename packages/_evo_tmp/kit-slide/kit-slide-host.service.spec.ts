import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { from } from 'rxjs';
import { skip } from 'rxjs/operators';
import { KitSlideHostService } from './kit-slide-host.service';

describe('KitSlideHostService', () => {
  let service: KitSlideHostService;
  let zoneMock: ZoneMock;
  beforeEach(async(() => {
    zoneMock = new ZoneMock();
    service = new KitSlideHostService(zoneMock as any);
  }));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should activate first', (done: DoneFn) => {
    const id = 1;
    service.activeChanges
      .pipe(skip(1))
      .subscribe(i => {
        expect(i).toEqual(id);
        done();
      });
    service.addId(id);
  });
  // @todo should change to next
  // @todo should change to prev
  // @todo should rotate
});

@Injectable()
class ZoneMock {
  get onStable() {
    return from([true]);
  }
}
