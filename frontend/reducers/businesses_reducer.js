import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from "../actions/business_actions";

const businessReducer = (state = {}, action) => {
  Object.freeze(state);
  let oldState = Object.assign( {}, state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      oldState[action.business.id] = action.business;
      return oldState;
    default:
      return state;
  }
}

export default businessReducer;