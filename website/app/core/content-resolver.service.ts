import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { ContentApi } from '../interfaces/content';
import { ContentService } from './content.service';

@Injectable()
export class ContentResolverService implements Resolve<ContentApi> {
  constructor(private http: HttpClient,
              private content: ContentService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ContentApi> | EmptyObservable<any> {
    const pkg = route.data['pkg'];
    const file = route.data['file'];
    return this.http.get<ContentApi>(file)
        .do(c => this.content.set(pkg, c));
  }
}
