import {connect} from "react-redux";
import { fetchBusinesses } from "../../actions/business_actions";
import { updateKeyword } from "../../actions/filter_actions";
import SearchBar from "./search_bar";

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.entities.businesses)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    updateKeyword: (keyword) => dispatch(updateKeyword(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);