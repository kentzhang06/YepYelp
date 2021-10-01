import { connect } from "react-redux";
import NavSearchBar from "./nav_search_bar";

const mapStateToProps = ({entities, session}) => {
  return {
    currentUser: entities.users[session.id]
  }
}

export default connect(mapStateToProps, null)(NavSearchBar);