import { Component, Injectable, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KitPlatformModule } from '../../kit-platform/kit-platform.module';
import { KitIconsRegistryService } from '../kit-icons-registry.service';
import { KitIconComponent } from './kit-icon.component';

describe('KitIconComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let icon: KitIconComponent;
  let registry: RegistryMock;
  // setup
  beforeEach(async(() =>
      TestBed.configureTestingModule({
        imports: [
          KitPlatformModule.forRoot(),
        ],
        declarations: [
          TestComponent,
          KitIconComponent,
        ],
        providers: [
          {
            provide: KitIconsRegistryService,
            useClass: RegistryMock,
          },
        ],
      }).compileComponents(),
  ));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    icon = fixture.componentInstance.icon;
    registry = TestBed.get(KitIconsRegistryService);
  });
  it('should be created', () => {
    expect(icon).toBeTruthy();
  });
  it('should get observable from registry', () => {
    const spy = spyOn(registry, 'get');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith('icon-name');
  });
  // @todo should re-render on changes
});

@Injectable()
class RegistryMock {
  get(name: string) {
    return {
      subscribe: () => {
      },
    };
  }
}

@Component({
  selector: 'test-cmp',
  template: `
    <kit-icon name="icon-name"></kit-icon>
  `,
})
class TestComponent {
  @ViewChild(KitIconComponent) icon: KitIconComponent;
}
