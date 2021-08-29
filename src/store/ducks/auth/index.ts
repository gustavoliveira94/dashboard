/* eslint-disable no-multi-assign */
/* eslint-disable prettier/prettier */
import { Dispatch, Action } from 'redux';

import { login } from 'services/request/auth/login';
import { getUser as recoverUser } from 'services/request/auth/getUser';

import { DispatchAction } from 'models/Store.interface';
import { Iuser } from 'models/User.interface';

export const types = {
  GET_USER: 'user/GET',
  REMOVE_USER: 'user/REMOVE',
};

interface IinitialState {
  user: Iuser;
  isLogged: boolean;
}

const initialState = {
  user: {
    id: 0,
    email: '',
    name: '',
    password: ''
  },
  isLogged: false,
};

const reducer = (
  state: IinitialState = initialState,
  action: DispatchAction,
) => {
  switch (action.type) {
    case types.GET_USER: {
      const isLogged = !!Object?.keys(action.payload || {})?.length;

      return {
        ...state,
        user: action.payload,
        isLogged,
      };
    }
    case types.REMOVE_USER: 
      return {
        ...state,
        user: {},
        isLogged: false,
      };    
    default:
      return state;
  }
};

export const setLogin = ({ email, password }: Pick<Iuser, 'email' | 'password'>) => {
  return async (dispatch: Dispatch): Promise<Action> => {
    const user = await login({ email, password })

    return dispatch({
      type: types.GET_USER,
      payload: user
    })
  }
}

export const getUser = () => {
  return async (dispatch: Dispatch): Promise<Action> => {
    const id = Number(localStorage?.getItem('userId'));

    const user = await recoverUser(id);

    return dispatch({
      type: types.GET_USER,
      payload: user
    })
  }
}

export const logOut = () => {
  return async (dispatch: Dispatch): Promise<Action> => {
    return dispatch({
      type: types.REMOVE_USER,
      payload: {}
    })
  }
}

export default reducer;
