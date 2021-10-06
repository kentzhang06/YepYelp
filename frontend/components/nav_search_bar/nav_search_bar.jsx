import React from "react";
import SearchBar from "../search_bar/search_bar";
import { withRouter } from "react-router";
import SearchBarContainer from "../search_bar/search_bar_container";

class NavSearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history, currentUser } = this.props;

    const displayLogin = (!currentUser) ?
        <button id='login-button' onClick={() => history.push('/login')}>Log In</button>
    : <div></div>;
    const displaySignup = (!currentUser) ?
      <button id='signup-button' onClick={() => history.push('/signup')}>Sign Up</button>
    : <div></div>;
    

    return(
      <div className='nav-search-bar'>
        <div id='nav-bar-logo' onClick={() => history.push('/')}>
          <ion-icon name="fish"></ion-icon>
          <img id='fish-icon' src={window.fishUrl} alt="fishicon" />
          <h2>YEPYELP</h2>
        </div>
        <SearchBarContainer key={history}/>
        <button id="write-review-button">Write a Review</button>
        {displayLogin}
        {displaySignup}
      </div>
    )
  }
}

export default withRouter(NavSearchBar);