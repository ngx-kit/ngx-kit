import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KitOverlayService } from '../kit-overlay.service';
import { KitOverlayHostComponent } from './kit-overlay-host.component';

describe('KitOverlayHostComponent', () => {
  let fixture: ComponentFixture<KitOverlayHostComponent>;
  let service: KitOverlayService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        KitOverlayHostComponent,
      ],
      providers: [
        KitOverlayService,
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    service = TestBed.get(KitOverlayService);
    spyOn(service, 'registerHost');
    fixture = TestBed.createComponent(KitOverlayHostComponent);
  });
  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should register in service`, () => {
    expect(service.registerHost).toHaveBeenCalled();
  });
});
