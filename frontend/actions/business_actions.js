import * as BApiUtil from "../util/business_api_util";

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

const receiveBusinesses = (businesses) => {
  return {
    type: RECEIVE_BUSINESSES,
    businesses
  };
};

const receiveBusiness = (business) => {
  return {
    type: RECEIVE_BUSINESS,
    business
  };
};

export const fetchBusinesses = (filters) => dispatch => {
  return BApiUtil.fetchBusinesses(filters)
    .then((businesses) => dispatch(receiveBusinesses(businesses)));
};

export const fetchBusiness = (businessId) => dispatch => {
  return BApiUtil.fetchBusiness(businessId)
    .then((business) => dispatch(receiveBusiness(business)));
} 

export const createBusiness = (business) => dispatch => {
  return BApiUtil.createBusiness(business)
    .then((business) => dispatch(receiveBusiness(business)));
}