import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ContentComponents, ContentPosts } from '../interfaces/content';

@Injectable()
export class ContentService {
  components$ = new BehaviorSubject<ContentComponents>({});

  posts$ = new BehaviorSubject<ContentPosts>({});
}
