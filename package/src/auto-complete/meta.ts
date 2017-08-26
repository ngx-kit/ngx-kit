import { Observable } from 'rxjs/Observable';

export type KitDataFactory = (value: string) => Observable<string[]>;
