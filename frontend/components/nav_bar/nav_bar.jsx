import React from "react";
import { Link, withRouter } from "react-router-dom";
import fishIcon from '../../../app/assets/images/fish.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    // this.demoUser = {
    //   email: "example@d.com",
    //   password: "demopass"
    // };

    // this.runDemo = this.runDemo.bind(this);
  }

  // runDemo() {
  //   this.props.login(this.demoUser);
  // }

  render() {
    const { currentUser, logout, history } = this.props;

    let display = (currentUser) ? 
      <div>
        <p> Welcome {currentUser.firstName} </p>
        <button onClick={logout}>Log Out</button>
      </div>
      :
      <div id='nav-bar-buttons'>
        <button id='login-button' onClick={() => history.push('/login')}>Log In</button>
        <button id='signup-button' onClick={() => history.push('/signup')}>Sign Up</button>
      </div>;
    
    return(
      <header id='nav-bar-container'>
        <div id='nav-bar-left-buttons'>
          <button id='review-button'>Write a Review</button>
          <button id='business-button' onClick={() => history.push('/businesses')}>Businesses</button>
        </div>
        {display}

      </header>
    )
  }
}

export default withRouter(NavBar);