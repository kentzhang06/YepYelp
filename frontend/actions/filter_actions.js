export const UPDATE_KEYWORD = 'UPDATE_KEYWORD';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_PRICE = 'UPDATE_PRICE';
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

const updateBounds = (bounds) => {
  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};

const updatePrice = (price) => {
  return {
    type: UPDATE_PRICE,
    price
  }
}

export function updateSearchFilters({keyword, price, location, bounds}) {
  return (dispatch, getState) => {
    dispatch(updateKey(keyword));
    dispatch(updatePrice(price));
    dispatch(updateLoc(location));
    dispatch(updateBounds(bounds));
    return fetchBusinesses(getState().ui.filters)(dispatch);
  };
}

