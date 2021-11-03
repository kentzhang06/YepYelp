import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import SearchBarContainer from "../search_bar/search_bar_container";

class NavSearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleTopReviewButton = this.handleTopReviewButton.bind(this);
  }

  handleTopReviewButton(e) {
    const { business, history } = this.props;
    e.preventDefault();
    if (business) {
      history.push(`/businesses/${business.id}/reviews`);
    }else {
      history.push(`/signup`);
    }
  }

  render() {
    const { history, currentUser, logout } = this.props;

    const displayLogin = (!currentUser) ?
        <button id='login-button' onClick={() => history.push('/login')}>Log In</button>
    : <div></div>;
    const displaySignup = (!currentUser) ?
      <button id='signup-button' onClick={() => history.push('/signup')}>Sign Up</button>
    : 
      <div className="greeting-photo-nav-search-bar">
        <img src={currentUser.image} alt="" />
        <div>
          <p> Welcome {currentUser.firstName} {currentUser.lastName.charAt(0)}.</p>
          <button id="logout-button" onClick={logout}>Log Out</button>
        </div>
      </div>


    

    return (
      <div className="nav-search-bar">
        <Link id="business-logo" to="/">
          <ion-icon name="fish"></ion-icon>
          <img id="fish-icon" src={window.fishUrl} alt="fishicon" />
          <h2>YEPYELP</h2>
        </Link>
        <SearchBarContainer key={history} />
        <div id="nav-search-right-btns-container">
          <button id="write-review-button" onClick={this.handleTopReviewButton}>
            Write a Review
          </button>
          {displayLogin}
          {displaySignup}
        </div>
      </div>
    );
  }
}

export default withRouter(NavSearchBar);