import {ReducerAction} from '../../global-types';
import {Auth} from './types';

export function authReducer(
  state: Auth,
  action: ReducerAction<'login' | 'loginSuccess' | 'loginError' | 'logout'>,
) {
  switch (action.type) {
    case 'login': {
      return {
        ...state,
        loading: true,
        user: undefined,
        error: undefined,
        isAuth: false,
      };
    }
    case 'loginSuccess': {
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        error: undefined,
        isAuth: true,
      };
    }
    case 'loginError': {
      return {
        ...state,
        user: undefined,
        loading: false,
        error: action.payload.error,
        isAuth: false,
      };
    }
    case 'logout': {
      return {
        ...state,
        user: undefined,
        loading: false,
        error: undefined,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
}
