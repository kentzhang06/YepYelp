import * as RApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  };
};

const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

const removeReview = (reviewId) => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  };
};

export const fetchReviews = (businessId) => dispatch => {
  return RApiUtil.fetchReviews(businessId)
    .then((reviews) => dispatch(receiveReviews(reviews)));
}

export const createReview = (review) => dispatch => {
  return RApiUtil.createReview(review)
    .then((review) => dispatch(receiveReview(review)));
}

export const editReview = (review) => dispatch => {
  return RApiUtil.editReview(review)
    .then((review) => dispatch(receiveReview(review)));
}

export const deleteReview = (review) => dispatch => {
  return RApiUtil.deleteReview(review)
    .then(() => dispatch(removeReview(review.id)))
}