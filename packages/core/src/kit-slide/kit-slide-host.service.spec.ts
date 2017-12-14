import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { skip } from 'rxjs/operators';
import { KitSlideHostService } from './kit-slide-host.service';

describe('KitSlideHostService', () => {
  let service: KitSlideHostService;
  let cdrMock: CdrMock;
  beforeEach(async(() => {
    cdrMock = new CdrMock();
    service = new KitSlideHostService(cdrMock as any);
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
class CdrMock {
  markForCheck() {
  }
}
