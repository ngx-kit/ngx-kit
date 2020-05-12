import { Component, Injectable, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { EvoIconsRegistry } from './evo-icons-registry';
import { EvoIconComponent } from './evo-icon.component';

describe('KitIconComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let icon: EvoIconComponent;
  let registry: RegistryMock;
  // setup
  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        TestComponent,
        EvoIconComponent,
      ],
      providers: [
        {
          provide: EvoIconsRegistry,
          useClass: RegistryMock,
        },
      ],
    }).compileComponents(),
  ));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    icon = fixture.componentInstance.icon;
    registry = TestBed.get(EvoIconsRegistry);
  });
  it('should be created', () => {
    expect(icon).toBeTruthy();
  });
  it('should get observable from registry', () => {
    const spy = spyOn(registry, 'get').and.callThrough();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith('icon-name');
  });
  // @todo should re-render on changes
});

@Injectable()
class RegistryMock {
  get(name: string) {
    return from([{svg: '<svg></svg>'}]);
  }
}

@Component({
  selector: 'test-cmp',
  template: `
    <kit-icon name="icon-name"></kit-icon>
  `,
})
class TestComponent {
  @ViewChild(EvoIconComponent, /* TODO: add static flag */ {}) icon: EvoIconComponent;
}
