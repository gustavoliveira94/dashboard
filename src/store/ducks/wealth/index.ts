import { Dispatch, Action } from 'redux';

import { getWealthID as wealthID } from 'services/graphqlClient/queries/wealth';

import { DispatchAction } from 'models/Store.interface';
import { AppState } from 'models/AppState.interface';

export interface IwealthReducer {
  wealth: {
    cdi: number;
    gain: number;
    total: number;
    profitability: number;
  };
}

export const types = {
  GET_WEALTH_ID: 'wealth_id/GET',
};

const initialState = {
  wealth: {
    cdi: 0,
    gain: 0,
    total: 0,
    profitability: 0,
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

export const getWealth = () => {
  return async (
    dispatch: Dispatch,
    getState: () => AppState,
  ): Promise<Action> => {
    const { id } = getState()?.auth.user;

    const wealth = await wealthID(id);

    return dispatch({
      type: types.GET_WEALTH_ID,
      payload: wealth,
    });
  };
};

export default reducer;
