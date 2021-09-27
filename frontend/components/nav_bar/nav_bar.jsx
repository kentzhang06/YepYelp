import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.demoUser = {
      email: "example@d.com",
      password: "demopass",
      firstName: "Demo",
      lastName: "Dood",
      zipCode: "99999"
    };

    this.runDemo = this.runDemo.bind(this);
  }

  // componentDidMount() {
  //   this.props.signup(this.demoUser);
  // }

  runDemo() {
    this.props.login(this.demoUser);
  }

  render() {
    const { currentUser, logout } = this.props;

    let display = (currentUser) ? 
      <div>
        <p> Welcome {currentUser.firstName} </p>
        <button onClick={logout}>Log Out</button>
      </div>
      :
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
        <button onClick={this.runDemo}>Demo</button>
      </div>;
    
    return(
      <header>
        <h1>YEP YELP</h1>

        {display}
      </header>
    )
  }
}

export default NavBar;