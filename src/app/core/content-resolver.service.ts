import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MdRenderService } from '@nvxme/ngx-md-render';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Content } from '../interfaces/content';

@Injectable()
export class ContentResolverService implements Resolve<Content> {
  constructor(private http: Http,
              private mdRender: MdRenderService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Content> {
    const data = route.data;
    if (data['content']) {
      return this.http.get(`/content/${data['content']}`)
          .map(res => res.json())
          .map(content => {
            return content.map(file => {
              file.body = this.mdRender.render(file.body);
              return file;
            });
          });
    } else {
      alert(404);
    }
  }
}
