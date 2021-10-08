import React from "react";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { currentUser, logout, history } = this.props;

    let display = (currentUser) ? 
      <div className="greeting-photo">
        <img src={currentUser.image} alt="" />
        <div>
          <p> Welcome {currentUser.firstName} {currentUser.lastName.charAt(0)}.</p>
          <button id="logout-button" onClick={logout}>Log Out</button>
        </div>
      </div>
      :
      <div id='nav-bar-buttons'>
        <button id='login-button' onClick={() => history.push('/login')}>Log In</button>
        <button id='signup-button' onClick={() => history.push('/signup')}>Sign Up</button>
      </div>;
    
    return(
      <header id='nav-bar-container'>
        <div id='nav-bar-left-buttons'>
          <button id='review-button' onClick={() => history.push('/businesses')}>Write a Review</button>
          <button id='business-button' onClick={() => history.push('/businesses')}>Businesses</button>
        </div>
        {display}

      </header>
    )
  }
}

export default withRouter(NavBar);