import { UPDATE_KEYWORD } from "../actions/filter_actions";

const filterReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_KEYWORD:
      let newState = Object.assign({}, state, {'keyword': action.keyword})
      return newState;
    default:
      return state;
  }
}

export default filterReducer;