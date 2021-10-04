import React from "react";
import { Link } from "react-router-dom";
import SignupLoginBanner from "./signup_login_banner";
import signupPic from '../../../app/assets/images/signup_login_pic.png';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.demoUser = {
      email: "sasuke@ninja.com",
      password: "demopass"
    };

    this.runDemo = this.runDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateErrors = this.updateErrors.bind(this);
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
    this.updateErrors();
    this.props.processForm(user)
      .then(() => this.props.history.push('/'));
  }

  updateErrors() {
    if(!this.state.email) this.emailError = <div className='error-fields'>Email can't be blank</div>;
    if(!this.state.password) this.passwordError = <div className='error-fields'>Password can't be blank</div>;
  }

  update(field) {
    if(this.state.email) this.emailError = <div></div>;
    if(this.state.password) this.passwordError = <div></div>;
    return (e) => this.setState({ [field]: e.target.value});
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    const { formType, errors } = this.props;

    if (errors) this.displayLoginErrors = <div className='error-fields'>{errors}</div>;

    let demoButton =
      <button id='demo-button' onClick={(e) => this.runDemo(e)}>Demo</button>;


    let formHeader = <Link id="login-signup-title" to='/'>Log in to YepYelp</Link>;

    
    let formLink = 
      <div className="form-footer">
        <p>New to YepYelp?</p>
        <Link to="/signup">Sign up</Link>
      </div>;

    return(
      <div>
        <SignupLoginBanner />
        
        <div className="form-container">
          {formHeader}<br/><br/>
          <form id="form" onSubmit={this.handleSubmit}>
           
            <input type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
            {this.emailError}
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
            {this.passwordError}
            {this.displayLoginErrors}
            <button>{formType}</button>
            {demoButton}  
          </form>
          {formLink}
        </div>

        <img id="signup-login-pic" src={window.signupNarutoUrl} alt="signupPic" />
      </div>
    )
  }
}

export default SessionForm;