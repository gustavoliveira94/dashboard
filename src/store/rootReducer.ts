import { combineReducers } from 'redux';

import wealth from './ducks/wealth';
import auth from './ducks/auth';

const rootReducer = combineReducers({
  wealth,
  auth,
});

export type AppState = ReturnType<typeof rootReducer> | undefined;

export default rootReducer;
