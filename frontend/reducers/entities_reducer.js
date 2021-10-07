import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import businessReducer from './businesses_reducer';
import reviewReducer from './reviews_reducer';

export default combineReducers({
  users: usersReducer,
  businesses: businessReducer,
  reviews: reviewReducer
});
