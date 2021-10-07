import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  let oldState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      oldState[action.review.id] = action.review;
      return oldState;
    case REMOVE_REVIEW:
      delete oldState[action.reviewId];
      return oldState;
    default:
      return state;
  }
}

export default reviewReducer;