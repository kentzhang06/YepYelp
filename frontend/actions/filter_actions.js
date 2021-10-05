export const UPDATE_KEYWORD = 'UPDATE_KEYWORD';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
import { fetchBusinesses } from "./business_actions";

const updateKey = (keyword) => {
  return {
    type: UPDATE_KEYWORD,
    keyword
  };
};

const updateLoc = (location) => {
  return {
    type: UPDATE_LOCATION,
    location
  };
};

export function updateKeyword(keyword) {
  return (dispatch, getState) => {
    dispatch(updateKey(keyword));
    return fetchBusinesses(getState().ui.filters)(dispatch);
    // delicious curry!
  };
}

export function updateLocation(location) {
  return (dispatch, getState) => {
    dispatch(updateLoc(location));
    return fetchBusinesses(getState().ui.filters)(dispatch);
    // delicious curry!
  };
}