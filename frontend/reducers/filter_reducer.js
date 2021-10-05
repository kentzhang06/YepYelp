import { UPDATE_KEYWORD, UPDATE_LOCATION } from "../actions/filter_actions";

const filterReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case UPDATE_KEYWORD:
      newState = Object.assign({}, state, {'keyword': action.keyword})
      return newState;
    case UPDATE_LOCATION:
      newState = Object.assign({}, state, {'location': action.location})
      return newState;
    default:
      return state;
  }
}

export default filterReducer;