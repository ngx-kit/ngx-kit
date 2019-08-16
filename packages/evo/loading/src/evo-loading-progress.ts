import { evoUuid } from '@ngx-kit/evo/util';
import { Observable, Subject } from 'rxjs';
import { EvoLoadingEndFn, EvoLoadingState } from './meta';

export class EvoLoadingProgress {

  private current = new Set<string>();

  private _state: EvoLoadingState = EvoLoadingState.None;

  private _stateChanges = new Subject<EvoLoadingState>();

  constructor(public readonly id: string) {
  }

  get state(): EvoLoadingState {
    return this._state;
  }

  get stateChanges(): Observable<EvoLoadingState> {
    return this._stateChanges.asObservable();
  }

  start(key?: string): EvoLoadingEndFn {
    this.current.add(key || evoUuid());
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
    if (this.current.size > 0 && this._state === EvoLoadingState.None) {
      this.setState(EvoLoadingState.InProgress);
    }
    if (this.current.size === 0 && this._state === EvoLoadingState.InProgress) {
      this.setState(EvoLoadingState.None);
    }
  }

  private setState(state: EvoLoadingState) {
    this._state = state;
    this._stateChanges.next(this._state);
  }
}
