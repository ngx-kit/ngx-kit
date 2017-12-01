import { async } from '@angular/core/testing';
import { KitClassService } from './kit-class.service';

describe('KitClassService', () => {
  let service: KitClassService;
  let rendererMock: RendererMock;
  let elMock: ElMock;
  beforeEach(async(() => {
    rendererMock = new RendererMock();
    elMock = new ElMock();
    service = new KitClassService(rendererMock as any, elMock as any);
  }));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should apply trigger class', () => {
    const className = 'active';
    const spyAdd = spyOn(rendererMock, 'addClass');
    const spyRemove = spyOn(rendererMock, 'removeClass');
    service.apply({[className]: true});
    expect(spyAdd).toHaveBeenCalledWith(elMock.nativeElement, className);
    service.apply({[className]: false});
    expect(spyRemove).toHaveBeenCalledWith(elMock.nativeElement, className);
  });
  it('should apply param class', () => {
    const className = 'color';
    const classValue1 = 'red';
    const classValue2 = 'blue';
    const spyAdd = spyOn(rendererMock, 'addClass');
    const spyRemove = spyOn(rendererMock, 'removeClass');
    service.apply({[className]: classValue1});
    expect(spyAdd).toHaveBeenCalledWith(elMock.nativeElement, `${className}-${classValue1}`);
    service.apply({[className]: classValue2});
    expect(spyRemove).toHaveBeenCalledWith(elMock.nativeElement, `${className}-${classValue1}`);
    expect(spyAdd).toHaveBeenCalledWith(elMock.nativeElement, `${className}-${classValue2}`);
  });
  // @todo should override classes by set state
});

class RendererMock {
  addClass() {
  }

  removeClass() {
  }
}

class ElMock {
  nativeElement = {};
}
