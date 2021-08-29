import { combineReducers } from 'redux';

import wealth from './ducks/wealth';

const rootReducer = combineReducers({
  wealth,
});

export type AppState = ReturnType<typeof rootReducer> | undefined;

export default rootReducer;
