import { connect } from "react-redux";
import LoginForm from './login_form';
import { clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Log in'
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);