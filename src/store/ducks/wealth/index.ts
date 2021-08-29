/* eslint-disable prettier/prettier */
import { DispatchAction } from 'models/Store.interface';

export interface IwealthReducer {
  wealth: {
    cdi: number;
    gain: number;
    total: number;
    profitability: number;
  }
}

export const types = {
  GET_WEALTH_ID: 'wealth_id/GET',
};

const initialState = {
  wealth: {
    cdi: 0,
    gain: 0,
    total: 0,
    profitability: 0
  },
};

const reducer = (
  state: IwealthReducer = initialState,
  action: DispatchAction,
) => {
  switch (action.type) {
    case types.GET_WEALTH_ID:
      return {
        ...state,
        wealth: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
