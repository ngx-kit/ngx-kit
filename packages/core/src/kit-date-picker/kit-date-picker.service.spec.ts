import { async } from '@angular/core/testing';
import { KitDatePickerService } from './kit-date-picker.service';
import { KitDatePickerGrid } from './meta';
import createSpy = jasmine.createSpy;

describe('KitDatePickerService', () => {
  let service: KitDatePickerService;
  let rendererMock: RendererMock;
  beforeEach(async(() => {
    rendererMock = new RendererMock();
    service = new KitDatePickerService(rendererMock as any);
  }));
  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
  it(`should generate grid and month cursor`, () => {
    let grid: KitDatePickerGrid = [];
    service.gridChanges.subscribe(g => {
      grid = g;
    });
    service.active = new Date();
    expect(grid.length).toBeGreaterThan(0);
  });
  it(`should re-generate grid on changes`, () => {
    const spy = createSpy();
    service.active = new Date();
    service.gridChanges.subscribe(spy);
    service.active = new Date();
    expect(spy).toHaveBeenCalledTimes(2);
  });
  it(`should generate month cursor at the start of month`, () => {
    let cursor: any = null;
    service.monthCursorChanges.subscribe(c => {
      cursor = c;
    });
    service.active = new Date('2017-12-31');
    expect(cursor).toBeTruthy();
    expect(cursor.getFullYear()).toEqual(2017);
    expect(cursor.getMonth()).toEqual(11);
    expect(cursor.getDate()).toEqual(1);
  });
  it(`should handle moves`, () => {
    const spy = createSpy();
    service.active = new Date('2017-12-31');
    service.gridChanges.subscribe(spy);
    service.handleMove({});
    runHandler(rendererMock, 'keydown.ArrowUp');
    runHandler(rendererMock, 'keydown.End');
    expect(spy).toHaveBeenCalledTimes(3);
  });
  it(`should pick on GridControl enter`, () => {
    const spy = createSpy();
    service.active = new Date('2017-12-31');
    service.pick.subscribe(spy);
    service.handleMove({});
    runHandler(rendererMock, 'keydown.Enter');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  // @todo should change month by gridControl
  // @todo should change year by gridControl
  // @todo process modMonth
  // @todo process modYear
});

function runHandler(renderer: RendererMock, event: string) {
  renderer.handlers[event]({
    preventDefault: () => {
    },
  });
}

class RendererMock {
  handlers = {};

  listen(target: any, event: string, handler: any) {
    this.handlers[event] = handler;
  }
}
