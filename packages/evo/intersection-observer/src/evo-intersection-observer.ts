import { Platform } from '@angular/cdk/platform';
import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

/**
 * Observe viewport intersection.
 *
 * Should be provided on a component or a directive.
 *
 *
 * ### Usage
 *
 * Provide `KitIntersectionService` on a component or a directive, that you want to observe.
 *
 * ```typescript
 * \@Component({
 *   ...
 *   providers: [
 *     KitIntersectionService,
 *   ],
 * })
 * export class TestComponent {
 *   constructor(private intersection: KitIntersectionService) {
 *   }
 *   ...
 *   // Check
 *   const visible = this.instersection.isIntersecting;
 *   ...
 *   // Observe
 *   this.instersection.observe().subscribe(isIntersecting => {
 *   });
 * }
 * ```
 */
@Injectable()
export class EvoIntersectionObserver implements OnDestroy {
  private observer = new BehaviorSubject<boolean>(false);

  private io: IntersectionObserver;

  constructor(
    private elementRef: ElementRef,
    private platform: Platform,
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
    if (this.platform.isBrowser && 'IntersectionObserver' in window) {
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
