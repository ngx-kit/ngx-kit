import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly affix = 'ngx-kit';

  constructor(
    private title: Title,
    private router: Router,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.setTitle('');
      }
    });
  }

  setTitle(value: string) {
    this.title.setTitle(value ? `${value} — ${this.affix}` : this.affix);
  }
}
