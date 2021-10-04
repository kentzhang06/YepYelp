import React from "react";
import { Link } from "react-router-dom";
import SignupLoginBanner from "./signup_login_banner";
import signupPic from '../../../app/assets/images/signup_login_pic.png';

class SignupForm extends React.Component {
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
      email: "sasuke@ninja.com",
      password: "demopass"
    };

    this.runDemo = this.runDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorChecker = this.errorChecker.bind(this);

  }

  runDemo(e) {
    e.preventDefault();
    this.setState(this.demoUser);
    this.props.processForm(this.demoUser)
      .then(() => this.props.history.push('/'));
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push('/'));
  }

  update(field) {
    if(this.state.email) this.emailError = <div></div>;
    if(this.state.firstName) this.firstNameError = <div></div>;
    if(this.state.lastName) this.lastNameError = <div></div>;
    if(this.state.zipCode) this.zipCodeError = <div></div>;
    if(this.state.password) this.passwordError = <div></div>;
    
    return (e) => this.setState({ [field]: e.target.value});
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  errorChecker(err) {
    const msg = <div className='error-fields'>{err}</div>;

    switch (err[0]) {
      case 'E':
        this.emailError = msg;
      case 'F':
        this.firstNameError = msg;
      case 'L':
        this.lastNameError = msg;
      case 'Z':
        this.zipCodeError = msg;
      case 'P':
        this.passwordError = msg;
      default:
        break;
    }
  }

  render() {
    const { formType, errors } = this.props;

    if (errors) {
      (errors.map((err, i) => this.errorChecker(err)))
    }

    let formHeader = 
      <Link id="login-signup-title" to='/'>Sign up for YepYelp</Link>;
    
    let formLink =
      <div className="form-footer">
        <p>Already on YepYelp?</p>
        <Link to="/login">Log in</Link>
      </div>;
    
    let nameDisplay = 
      <span className="form-name-input">
        <span id="sign-up-fields">
          <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.update('firstName')} />
          {this.firstNameError}
        </span>
        <span id="sign-up-fields">
          <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.update('lastName')} />
          {this.lastNameError}
        </span>
      </span>;

    let zipDisplay = 
      <input type="text" placeholder="ZIP Code" value={this.state.zipCode} onChange={this.update('zipCode')} />;

    return(
      <div>
        <SignupLoginBanner />
        
        <div className="form-container">
          {formHeader}<br/><br/>
          <form id="form" onSubmit={this.handleSubmit}>
            {nameDisplay}
            <input type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
            {this.emailError}
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
            {this.passwordError}
            {zipDisplay}
            {this.zipCodeError}
            <button>{formType}</button>
          </form>
          {formLink}
        </div>

        <img id="signup-login-pic" src={window.signupNarutoUrl} alt="signupPic" />
      </div>
    )
  }
}

export default SignupForm;