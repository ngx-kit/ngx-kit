import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/mapTo';
import { Observable } from 'rxjs/Observable';
import { ContentComponents } from '../interfaces/content';
import { ContentService } from './content.service';

@Injectable()
export class ContentComponentsResolverService implements Resolve<ContentComponents> {
  constructor(private http: HttpClient,
              private content: ContentService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ContentComponents> {
    return this.http.get<ContentComponents>(`/assets/content/components.json`)
        .do(components => this.content.components$.next(components));
  }
}
