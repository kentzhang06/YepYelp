import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavSearchBar from "./nav_search_bar";

const mapStateToProps = ({entities, session}) => {
  return {
    currentUser: entities.users[session.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSearchBar);