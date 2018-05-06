import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { KitLoadingProgress } from './kit-loading-progress';
import { kitLoadingGlobal } from './meta';

@Injectable({
  providedIn: 'root',
})
export class KitLoadingService {
  private progresses = new Map<string, KitLoadingProgress>();

  constructor(private router: Router) {
    // create global progress
    const globalProgress = this.progress(kitLoadingGlobal);
    // subscribe globalProgress to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        globalProgress.start('routing');
      }
      if (event instanceof NavigationEnd) {
        globalProgress.end('routing');
      }
    });
  }

  get global(): KitLoadingProgress {
    return this.progress(kitLoadingGlobal);
  }

  progress(id: string): KitLoadingProgress {
    if (this.progresses.has(id)) {
      return this.progresses.get(id) as KitLoadingProgress;
    } else {
      const progress = new KitLoadingProgress(id);
      this.progresses.set(id, progress);
      return progress;
    }
  }
}
