import { Observable } from 'rxjs/Observable';

export interface KitDataSourceFactory {
  (value: string): Observable<string[]>;
}
