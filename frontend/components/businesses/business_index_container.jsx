import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions/business_actions";
import BusinessIndex from "../businesses/business_index";
import { updateKeyword, updateLocation } from "../../actions/filter_actions";

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.entities.businesses)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    updateKeyword: (keyword) => dispatch(updateKeyword(keyword)),
    updateLocation: (location) => dispatch(updateLocation(location))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);