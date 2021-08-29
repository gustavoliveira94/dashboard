/* eslint-disable prettier/prettier */
import { DispatchAction } from 'models/Store.interface';

import { Iuser } from 'models/User.interface';

export const types = {
  GET_USER: 'user/GET',
};

interface IinitialState {
  user: Iuser
}

const initialState = {
  user: {
    id: 0,
    email: '',
    name: '',
    password: ''
  },
};

const reducer = (
  state: IinitialState = initialState,
  action: DispatchAction,
) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
