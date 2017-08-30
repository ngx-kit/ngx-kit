import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ContentPosts } from '../interfaces/content';
import { ContentService } from './content.service';

@Injectable()
export class ContentPostsResolverService implements Resolve<ContentPosts> {
  constructor(private http: HttpClient,
              private content: ContentService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ContentPosts> {
    return this.http.get<ContentPosts>(`/assets/content/posts.json`)
        .do(posts => this.content.posts$.next(posts));
  }
}
