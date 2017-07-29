import { inject, TestBed } from '@angular/core/testing';
import { KitCoreService } from './kit-core.service';

describe('Core/KitCoreService', () => {
  let service: KitCoreService;
  // setup
  beforeEach(() => TestBed.configureTestingModule({
    providers: [KitCoreService],
  }));
  beforeEach(inject([KitCoreService], s => {
    service = s;
  }));
  // specs
  it('should generate uuid with length 36', () => {
    expect(service.uuid().length).toEqual(36);
  });
});
