import React from "react";
import fishIcon from '../../../app/assets/images/fish.png';
import { withRouter } from "react-router";

class SignupLoginBanner extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    const { history } = this.props;

    return (
      <header id='signup-login-banner'>
        <div id='nav-bar-logo' onClick={() => history.push('/')}>
          <ion-icon name="fish"></ion-icon>
          <img id='fish-icon' src={window.fishUrl} alt="fishicon" />
          <h2>YEPYELP</h2>
        </div>
      </header>
    )
  }
}

export default withRouter(SignupLoginBanner);