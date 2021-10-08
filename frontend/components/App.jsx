import React from "react";
import { Route, Switch } from "react-router";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Home from "./home/home";
import ErrorPage from "./error/error";
import BusinessIndexContainer from "./businesses/business_index_container";
import BusinessShowContainer from "./businesses/business_show_container";
import EditReviewFormContainer from "./reviews/edit_review_form_container";
import GalleryContainer from "./image_gallery/gallery_container";
import CreateReviewFormContainer from "./reviews/create_review_form_container";

const App = () => (
  <div>
    <header>
    </header>

    <Switch>
      <Route exact path="/" component={Home} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
      <ProtectedRoute exact path="/businesses/:businessId/reviews" component={CreateReviewFormContainer} />
      <ProtectedRoute exact path="/businesses/:businessId/reviews/:reviewId" component={EditReviewFormContainer} />
      <Route path="/businesses" component={BusinessIndexContainer} />
      <Route exact path="/biz_photos/:businessId" component={GalleryContainer} />
      <Route component={ErrorPage}/>

    </Switch>

  </div>
);

export default App;