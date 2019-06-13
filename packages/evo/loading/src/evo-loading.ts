import { Injectable, Optional } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { EvoLoadingProgress } from './evo-loading-progress';
import { evoLoadingGlobal } from './meta';

/**
 * Service for providing loading state.
 *
 *
 * ### Usage
 *
 * #### Global progress
 *
 * Provide `KitLoadingService`, get `global` progress and subscribe on state changes:
 *
 * ```typescript
 * constructor(private loading: KitLoadingService) {
 * }
 *
 * ngOnInit() {
 *   this.loading.global.stateChanges
 *     .subscribe(s => {
 *       this.loadingState = s;
 *     });
 * }
 * ```
 *
 * There are two states: `KitLoadingState.InProgress` and `KitLoadingState.None`.
 *
 * State changes on `NavigationStart` and `NavigationEnd` event by default.
 *
 * Also you can run progress manually. For example, show loading progress while data is fetching:
 *
 * ```typescript
 * this.loading.global.start('data');
 * this.dataService.get().subscribe(() => {
 *   ...
 *   this.loading.global.end('data');
 * });
 * ```
 *
 * State switched to `None` only after all started events was ended.
 *
 * #### Custom progress
 *
 * Get a progress by `.progress(key: string)` method, if progress is not presented it will be automatically created.
 *
 * Custom progresses do not watch on router events, only on manual `start`/`end` calls.
 *
 * ```typescript
 * this.loading.progress('data-loading').start('data');
 * this.dataService.get().subscribe(() => {
 *   ...
 *   this.loading.progress('data-loading').end('data');
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class EvoLoading {
  private progresses = new Map<string, EvoLoadingProgress>();

  constructor(
    @Optional() private router: Router,
  ) {
    // create global progress
    const globalProgress = this.progress(evoLoadingGlobal);
    // subscribe globalProgress to router events
    if (this.router) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          globalProgress.start('routing');
        }
        if (event instanceof NavigationEnd) {
          globalProgress.end('routing');
        }
      });
    }
  }

  get global(): EvoLoadingProgress {
    return this.progress(evoLoadingGlobal);
  }

  progress(id: string): EvoLoadingProgress {
    if (this.progresses.has(id)) {
      return this.progresses.get(id) as EvoLoadingProgress;
    } else {
      const progress = new EvoLoadingProgress(id);
      this.progresses.set(id, progress);
      return progress;
    }
  }
}