import { Observable, Subject } from 'rxjs';
import { KitLoadingState } from './meta';

export class KitLoadingProgress {

  private current = new Set<string>();

  private _state: KitLoadingState = KitLoadingState.None;

  private _stateChanges = new Subject<KitLoadingState>();

  constructor(public readonly id: string) {
  }

  get state(): KitLoadingState {
    return this._state;
  }

  get stateChanges(): Observable<KitLoadingState> {
    return this._stateChanges.asObservable();
  }

  start(key: string) {
    this.current.add(key);
    this.checkState();
  }

  end(key: string) {
    this.current.delete(key);
    this.checkState();
  }

  private checkState() {
    if (this.current.size > 0 && this._state === KitLoadingState.None) {
      this.setState(KitLoadingState.InProgress);
    }
    if (this.current.size === 0 && this._state === KitLoadingState.InProgress) {
      this.setState(KitLoadingState.None);
    }
  }

  private setState(state: KitLoadingState) {
    this._state = state;
    this._stateChanges.next(this._state);
  }
}
