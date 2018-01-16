import { async } from '@angular/core/testing';
import { KitCollapseHostService } from './kit-collapse-host.service';

describe('KitCollapseHostService', () => {
  let service: KitCollapseHostService;
  beforeEach(async(() => {
    service = new KitCollapseHostService();
  }));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should activate', () => {
    const id = 1;
    service.addId(id);
    expect(service.active.has(id)).toBeFalsy();
    service.activate(id);
    expect(service.active.has(id)).toBeTruthy();
  });
  it('should deactivate', () => {
    const id = 1;
    service.addId(id);
    service.activate(id);
    expect(service.active.has(id)).toBeTruthy();
    service.deactivate(id);
    expect(service.active.has(id)).toBeFalsy();
  });
  it('should toggle', () => {
    const id = 1;
    service.addId(id);
    service.toggle(id);
    expect(service.active.has(id)).toBeTruthy();
    service.toggle(id);
    expect(service.active.has(id)).toBeFalsy();
  });
  it('should activate first', () => {
    const firstId = 1;
    const secondId = 2;
    service.addId(firstId);
    service.addId(secondId);
    expect(service.active.has(firstId)).toBeFalsy();
    service.activateFirst();
    expect(service.active.has(firstId)).toBeTruthy();
    service.activate(secondId);
    expect(service.active.has(secondId)).toBeTruthy();
    service.activateFirst();
    expect(service.active.has(firstId)).toBeTruthy();
    expect(service.active.size).toEqual(1);
  });
  it('should handle multiple', () => {
    const firstId = 1;
    const secondId = 2;
    service.addId(firstId);
    service.addId(secondId);
    service.multiple = true;
    expect(service.active.size).toEqual(0);
    service.activate(firstId);
    expect(service.active.has(firstId)).toBeTruthy();
    expect(service.active.size).toEqual(1);
    service.activate(secondId);
    expect(service.active.has(firstId)).toBeTruthy();
    expect(service.active.has(secondId)).toBeTruthy();
    expect(service.active.size).toEqual(2);
  });
});
