import { Action } from '../../types';
import { FIND_ACCOUNT, GET_ACCOUNT, UPDATE_ACCOUNT } from '@/actions';
import { UserNamespace } from '@/shared/namespaces/user';

export interface AppReducerState {
  user: Record<string, UserNamespace.User>;
  search: Record<string, UserNamespace.User>;
}

export const SceneDefaultState: AppReducerState = {
  user: {},
  search: {},
};

const AppReducer = (state = SceneDefaultState, action: Action) => {
  switch (action.type) {
    case GET_ACCOUNT.SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          [action.key]: action.payload,
        },
      };
    case FIND_ACCOUNT.SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          [action.key]: action.payload,
        },
      };

    case UPDATE_ACCOUNT.SUCCESS: {
      return {
        user: {
          ...state.user,
          [action.key]: action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default AppReducer;
