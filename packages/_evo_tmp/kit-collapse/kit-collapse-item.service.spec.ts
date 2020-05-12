import { async } from '@angular/core/testing';
import { KitCollapseItemService } from './kit-collapse-item.service';

describe('KitCollapseItemService', () => {
  let service: KitCollapseItemService;
  let hostMock: HostMock;
  beforeEach(async(() => {
    hostMock = new HostMock();
    service = new KitCollapseItemService(hostMock as any);
  }));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should proxy calls', () => {
    const id = service.id;
    // isActive
    let spy = spyOn(hostMock, 'isActive');
    const active = service.active;
    expect(spy).toHaveBeenCalledWith(id);
    // activate
    spy = spyOn(hostMock, 'activate');
    service.active = true;
    expect(spy).toHaveBeenCalledWith(id);
    // deactivate
    spy = spyOn(hostMock, 'deactivate');
    service.active = false;
    expect(spy).toHaveBeenCalledWith(id);
    // toggle
    spy = spyOn(hostMock, 'toggle');
    service.toggle();
    expect(spy).toHaveBeenCalledWith(id);
  });
  it('should replace id on id change', () => {
    const addSpy = spyOn(hostMock, 'addId');
    const deleteSpy = spyOn(hostMock, 'deleteId');
    const id = service.id;
    const newId = 'id';
    service.id = newId;
    expect(deleteSpy).toHaveBeenCalledWith(id);
    expect(addSpy).toHaveBeenCalledWith(newId);
  });
  it('should delete id on destroy', () => {
    const spy = spyOn(hostMock, 'deleteId');
    const id = service.id;
    service.ngOnDestroy();
    expect(spy).toHaveBeenCalledWith(id);
  });
});

class HostMock {
  isActive() {
  }

  deactivate() {
  }

  activate() {
  }

  deleteId() {
  }

  addId() {
  }

  toggle() {
  }
}
