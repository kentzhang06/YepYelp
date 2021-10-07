import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import {login, signup, logout} from "./actions/session_actions";
import { createBusiness, fetchBusiness, fetchBusinesses } from "./actions/business_actions";
import { createReview, editReview, fetchReviews, deleteReview } from "./actions/review_actions";

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.fetchBusinesses = fetchBusinesses;
    window.fetchBusiness = fetchBusiness;
    window.createBusiness = createBusiness;

    window.fetchReviews = fetchReviews;
    window.createReview = createReview;
    window.editReview = editReview;
    window.deleteReview = deleteReview;
    // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);



})