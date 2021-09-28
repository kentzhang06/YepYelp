import React from "react";
import { Link } from "react-router-dom";
import SignupLoginBanner from "./signup_login_banner";
import signupPic from '../../../app/assets/images/signup_login_pic.png';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      zipCode: ""
    };

    this.demoUser = {
      email: "example@d.com",
      password: "demopass"
    };

    this.runDemo = this.runDemo.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  runDemo(e) {
    e.preventDefault();
    this.props.login(this.demoUser);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push('/'));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value});
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    const { formType, errors } = this.props;
    let displayErrors = (errors) ? (errors.map((err, i) => <li key={i}>{err}</li>) ) : <div></div>;
    
    let demoButton = (formType === "Log in") ?
      <button id='demo-button' onClick={(e) => this.runDemo(e)}>Demo</button>
      :
      <div></div>;

    let formHeader = (formType === "Log in") ?
      <h2>Log in to YepYelp</h2>
      :
      <h2>Sign up for YepYelp</h2>;
    
    let formLink = (formType === "Log in") ?
      <div className="form-footer">
        <p>New to YepYelp?</p>
        <Link to="/signup">Sign up</Link>
      </div>
      :
      <div className="form-footer">
        <p>Already on YepYelp?</p>
        <Link to="/login">Log in</Link>
      </div>;
    
    let nameDisplay = (formType === "Sign Up") ?
      <div className="form-name-input">
        <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.update('firstName')} />
        <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.update('lastName')} />
      </div>
      : <div> </div>;

    let zipDisplay = (formType === "Sign Up") ?
      <input type="text" placeholder="ZIP Code" value={this.state.zipCode} onChange={this.update('zipCode')} />

      : <div> </div>;

    return(
      <div>
        <SignupLoginBanner />
        
        <div className="form-container">
          {formHeader}<br />
          <form id="form" onSubmit={this.handleSubmit}>
            {nameDisplay}
            <input type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
            {zipDisplay}
            <button>{formType}</button>
          </form>
          {formLink}
          <ul>{displayErrors}</ul>
          {demoButton}
        </div>

        <img id="signup-login-pic" src={signupPic} alt="signupPic" />
      </div>
    )
  }
}

export default SessionForm;