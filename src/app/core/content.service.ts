import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ContentApi, ContentComponents, ContentPosts } from '../interfaces/content';

@Injectable()
export class ContentService {
  api$ = new BehaviorSubject<ContentApi>(null);

  components$ = new BehaviorSubject<ContentComponents>({});

  posts$ = new BehaviorSubject<ContentPosts>({});
}
