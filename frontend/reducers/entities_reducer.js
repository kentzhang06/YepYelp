import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import businessReducer from './businesses_reducer';

export default combineReducers({
  users: usersReducer,
  businesses: businessReducer
});
