import { uuid } from '@ngx-kit/evo/util';
import { Observable, Subject } from 'rxjs';
import { LoadingEndFn, LoadingState } from './meta';

export class LoadingProgress {

  private current = new Set<string>();

  private _state: LoadingState = LoadingState.None;

  private _stateChanges = new Subject<LoadingState>();

  constructor(public readonly id: string) {
  }

  get state(): LoadingState {
    return this._state;
  }

  get stateChanges(): Observable<LoadingState> {
    return this._stateChanges.asObservable();
  }

  start(key?: string): LoadingEndFn {
    this.current.add(key || uuid());
    this.checkState();
    return () => {
      this.end(key);
    };
  }

  end(key?: string) {
    if (key) {
      this.current.delete(key);
    } else {
      this.current.clear();
    }
    this.checkState();
  }

  private checkState() {
    if (this.current.size > 0 && this._state === LoadingState.None) {
      this.setState(LoadingState.InProgress);
    }
    if (this.current.size === 0 && this._state === LoadingState.InProgress) {
      this.setState(LoadingState.None);
    }
  }

  private setState(state: LoadingState) {
    this._state = state;
    this._stateChanges.next(this._state);
  }
}
