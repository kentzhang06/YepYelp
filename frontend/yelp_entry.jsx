import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import {login, signup, logout} from "./actions/session_actions";
import { createBusiness, fetchBusiness, fetchBusinesses } from "./actions/business_actions";

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
    // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  var modalEle = document.querySelector(".modal");
  var modalImage = document.querySelector(".modalImage");
  Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
    item.addEventListener("click", event => {
        modalEle.style.display = "block";
        modalImage.src = event.target.src;
    });
  });
  document.querySelector(".close").addEventListener("click", () => {
    modalEle.style.display = "none";
  });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
})