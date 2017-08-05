import { Observable } from 'rxjs/Observable';

export type KitDataSourceFactory = (value: string) => Observable<string[]>;
