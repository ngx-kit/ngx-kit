import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ContentComponents } from '../interfaces/content';
import { ContentService } from './content.service';

@Injectable()
export class ContentPostsResolverService implements Resolve<ContentComponents> {
  constructor(private http: Http,
              private content: ContentService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ContentComponents> {
    return this.http.get(`/assets/content/posts.json`)
        .map(res => res.json())
        .do(posts => this.content.posts$.next(posts));
  }
}
