import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions/business_actions";
import BusinessIndex from "../businesses/business_index";
import { updateSearchFilters } from "../../actions/filter_actions";

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.entities.businesses)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    updateSearchFilters: (keyword, location, bounds) => dispatch(updateSearchFilters(keyword, location, bounds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);