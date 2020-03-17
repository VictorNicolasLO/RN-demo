import {useReducer} from 'react';
import {makeProvider} from '../../_lib';
import {authReducer} from './auth-reducer';
import {useApiProvider} from '../api-provider';
import {useNavigation} from '@react-navigation/native';

function useAuth() {
  const [authState, dispatch] = useReducer(authReducer, {});

  const {
    api: {auth},
  } = useApiProvider();

  async function login(username: string, password: string) {
    dispatch({
      type: 'login',
    });
    const response: any = await auth.signIn(username, password);

    dispatch({
      type: 'loginSuccess',
      payload: {
        username: response.username,
      },
    });
  }

  function logout() {
    dispatch({type: 'logout'});
  }

  return {
    ...authState,
    login,
    logout,
  };
}

export const {
  Provider: AuthProvider,
  useProvider: useAuthProvider,
} = makeProvider(useAuth);
