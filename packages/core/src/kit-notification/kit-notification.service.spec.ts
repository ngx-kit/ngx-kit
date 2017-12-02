import { async } from '@angular/core/testing';
import { skip } from 'rxjs/operators';
import { KitNotificationService } from './kit-notification.service';
import { KitNotificationHostConfig } from './meta';

describe('KitNotificationService', () => {
  let service: KitNotificationService;
  beforeEach(async(() => {
    service = new KitNotificationService();
  }));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should emit open', (done: DoneFn) => {
    service.itemsChanges
        .pipe(skip(1))
        .subscribe(items => {
          expect(items.length).toEqual(1);
          done();
        });
    service.open({});
  });
  it('should emit close after timeout', (done: DoneFn) => {
    service.itemsChanges
        .pipe(skip(2))
        .subscribe(items => {
          expect(items.length).toEqual(0);
          done();
        });
    // speed up the test
    service.config({duration: 10});
    service.open({});
  });
  it('should emit config', (done: DoneFn) => {
    const config: KitNotificationHostConfig = {
      duration: 100,
      position: 'top-left',
    };
    service.configChanges
        .pipe(skip(1))
        .subscribe(c => {
          expect(c.duration).toEqual(config.duration);
          expect(c.position).toEqual(config.position);
          done();
        });
    service.config(config);
  });
});
