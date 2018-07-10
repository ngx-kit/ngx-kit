import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { KitPlatformService } from '../kit-platform/kit-platform.service';

/**
 * Should be provided on a component or a directive.
 */
@Injectable()
export class KitIntersectionService implements OnDestroy {
  private observer = new BehaviorSubject<boolean>(false);

  private io: IntersectionObserver;

  constructor(
    private elementRef: ElementRef,
    private platform: KitPlatformService,
  ) {
  }

  get isIntersecting() {
    return this.observer.value;
  }

  ngOnDestroy() {
    if (this.io) {
      this.io.disconnect();
    }
  }

  observe(): Observable<boolean | null> {
    if (this.platform.isBrowser() && 'IntersectionObserver' in window) {
      if (!this.io) {
        this.initObserver();
      }
      return this.observer.asObservable();
    } else {
      return from([null]);
    }
  }

  private initObserver() {
    this.io = new IntersectionObserver((data) => {
      this.observer.next(data && data[0] && data[0].isIntersecting);
    });
    this.io.observe(this.elementRef.nativeElement);
  }
}
