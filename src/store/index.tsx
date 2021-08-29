import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import { DispatchAction } from 'models/Store.interface';
import { AppState } from 'models/AppState.interface';

import rootReducer from './rootReducer';

const combinedReducer = rootReducer;

export const reducer = (state: AppState, action: DispatchAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combinedReducer(state, action);
};

export const store = () =>
  createStore<AppState, DispatchAction, any, any>(
    reducer,
    applyMiddleware(thunk),
  );

export const wrapper = createWrapper(store);
