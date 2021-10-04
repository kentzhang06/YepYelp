export const UPDATE_KEYWORD = 'UPDATE_KEYWORD';
import { fetchBusinesses } from "./business_actions";

const updateKey = (keyword) => {
  return {
    type: UPDATE_KEYWORD,
    keyword
  };
};

export function updateKeyword(keyword, value) {
  return (dispatch, getState) => {
    dispatch(updateKey(keyword, value));
    return fetchBusinesses(getState().ui.filters)(dispatch);
    // delicious curry!
  };
}