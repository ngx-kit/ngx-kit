export const loadingGlobal = 'global';

export type LoadingEndFn = () => void;

export enum LoadingState {
  InProgress = 'in-progress',
  None = 'none',
}
