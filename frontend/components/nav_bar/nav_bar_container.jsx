import { connect } from "react-redux";
import NavBar from './nav_bar';
import { logout, signup, login } from "../../actions/session_actions";

const mapStateToProps = ( {entities, session} ) => {
  return {
    // currentUserId: state.session.id
    currentUser: entities.users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

