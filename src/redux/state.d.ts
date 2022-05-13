
import { UIState } from './reducers/ui';
import { AppReducerState } from './reducers/app';

export interface RootState {
  ui: UIState;
  app: AppReducerState;
}
