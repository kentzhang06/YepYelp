import React from "react";
import { Link } from "react-router-dom";

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

    this.handleSubmit = this.handleSubmit.bind(this);
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
    let formLink = (formType === "Login") ? (<Link to="/signup">Sign Up</Link>) : (<Link to="/login">Login</Link>);
    
    let nameDisplay = (formType === "Signup") ?
      <div className="form-name-input">
        <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.update('firstName')} />
        <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.update('lastName')} />
      </div>
      : <div> </div>;

    let zipDisplay = (formType === "Signup") ?
      <input type="text" placeholder="ZIP Code" value={this.state.zipCode} onChange={this.update('zipCode')} />

      : <div> </div>;

    return(
      <div className="form-container">
        <h2>{formType} for YepYelp</h2>
        <form id="form" onSubmit={this.handleSubmit}>
          {nameDisplay}
          <input type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
          {zipDisplay}
          <button>{formType}</button>
        </form>
        {formLink}
        <ul>{displayErrors}</ul>

      </div>
    )
  }
}

export default SessionForm;