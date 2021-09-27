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
    let formLink = (formType === "login") ? (<Link to="/signup">Sign Up</Link>) : (<Link to="/login">Login</Link>);
    
    let signupDisplay = (formType === "signup") ?
      <div>
        <label> First Name:
          <input type="text" value={this.state.firstName} onChange={this.update('firstName')} />
        </label>
        <label> Last Name:
          <input type="text" value={this.state.lastName} onChange={this.update('lastName')} />
        </label>
        <label> Zip Code:
          <input type="text" value={this.state.zipCode} onChange={this.update('zipCode')} />
        </label>
      </div>
      : <div> </div>;

    return(
      <div>
        <h2>{formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <label> Email:
            <input type="text" value={this.state.email} onChange={this.update('email')} />
          </label>
          <label> Password:
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          {signupDisplay}
          <button>{formType}</button>
        </form>
        {formLink}
        <ul>{displayErrors}</ul>

      </div>
    )
  }
}

export default SessionForm;