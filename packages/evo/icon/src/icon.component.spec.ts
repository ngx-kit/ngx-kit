import { Component, Injectable, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { IconsRegistry } from './icons-registry';
import { IconComponent } from './icon.component';

describe('KitIconComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let icon: IconComponent;
  let registry: RegistryMock;
  // setup
  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        TestComponent,
        IconComponent,
      ],
      providers: [
        {
          provide: IconsRegistry,
          useClass: RegistryMock,
        },
      ],
    }).compileComponents(),
  ));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    icon = fixture.componentInstance.icon;
    registry = TestBed.get(IconsRegistry);
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
  @ViewChild(IconComponent, /* TODO: add static flag */ {}) icon: IconComponent;
}
