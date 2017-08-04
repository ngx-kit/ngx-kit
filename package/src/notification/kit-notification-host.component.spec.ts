import { Component, DebugElement, Directive, Injectable, Input } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StylerComponent } from '@ngx-kit/styler';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { KitCoreService } from '../core/kit-core.service';
import { kitComponentNotificationHost } from '../core/meta/tokens';
import { KitNotificationHostComponent } from './kit-notification-host.component';
import { KitNotificationService } from './kit-notification.service';
import { KitNotificationHostConfig } from './meta';

describe('Notification/NotificationHostComponent', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;
  let element: Element;
  let de: DebugElement;
  let styler: StylerMock;
  let notificationHost: KitNotificationHostComponent;
  let notificationService: KitNotificationService;
  // setup
  beforeEach(async(() =>
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule],
        declarations: [StylerDirective, ContainerComponent, KitNotificationHostComponent, KitOverlayContainerMock],
        providers: [
          {
            provide: kitComponentNotificationHost,
            useClass: StyleMock,
          },
          {
            provide: 'styler',
            useClass: StylerMock,
          },
          {
            provide: KitNotificationService,
            useClass: NotificationServiceMock,
          },
          {
            provide: KitCoreService,
            useClass: KitCoreServiceMock,
          },
        ],
      }).overrideComponent(KitNotificationHostComponent, {
        set: {
          viewProviders: [
            {
              provide: StylerComponent,
              useExisting: 'styler',
            },
          ],
        },
      }).compileComponents(),
  ));
  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
    notificationHost = de.children[0].componentInstance;
    fixture.detectChanges();
  });
  beforeEach(inject(['styler', KitNotificationService],
      (stylerMock: StylerMock, notificationServiceMock: KitNotificationService) => {
        styler = stylerMock;
        notificationService = notificationServiceMock;
      }));
  // specs
  it('container and component instance should be created', () => {
    expect(container).toBeTruthy();
    expect(notificationHost instanceof KitNotificationHostComponent).toBeTruthy();
  });
  it('should display notification', () => {
    const message = 'hello!';
    notificationHost.open({message});
    fixture.detectChanges();
    // it could be better
    expect(de.nativeElement.innerHTML.indexOf(message) !== -1).toBeTruthy();
  });
  // @todo close click
  // @todo handle config
  // @todo set color
});

@Component({
  selector: 'container',
  template: `
    <kit-notification-host></kit-notification-host>
  `,
})
class ContainerComponent {
}

@Injectable()
class StylerMock {
  host = {
    state: {},
  };

  item = {
    state: {
      color: '',
    },
  };

  itemMessage = {
    state: {
      color: '',
    },
  };

  itemTitle = {
    state: {
      color: '',
    },
  };

  wrapper = {
    state: {
      position: '',
    },
  };

  register(style: any) {
  }
}

@Injectable()
class StyleMock {
}

@Directive({
  selector: '[styler]',
})
export class StylerDirective {
  @Input() styler: any;
}

@Injectable()
class NotificationServiceMock {
  config$ = new BehaviorSubject<KitNotificationHostConfig>({
    position: 'top-right',
    duration: 4000,
  });
}

@Component({
  selector: 'kit-overlay-container',
  template: `
    <ng-content></ng-content>
  `,
})
class KitOverlayContainerMock {
  @Input() opened: boolean;

  @Input() position: string;

  @Input() type: string;
}

@Injectable()
class KitCoreServiceMock {
  uuid() {
    return '123';
  }
}
