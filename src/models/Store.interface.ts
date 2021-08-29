import { Action } from 'redux';

export interface DispatchAction extends Action {
  payload: any;
}
