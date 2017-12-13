import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KitOverlayModule } from '../kit-overlay.module';
import { KitOverlayService } from '../kit-overlay.service';
import { KitOverlayHostComponent } from './kit-overlay-host.component';

describe('KitOverlayHostComponent', () => {
  let fixture: ComponentFixture<KitOverlayHostComponent>;
  let service: KitOverlayService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        KitOverlayModule.forRoot(),
        KitOverlayModule,
      ],
      declarations: [
      ],
      providers: [
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    service = TestBed.get(KitOverlayService);
    fixture = TestBed.createComponent(KitOverlayHostComponent);
  });
  it('should create the component', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
