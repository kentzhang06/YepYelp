import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions"
import BusinessShow from "../businesses/business_show";

const mapStateToProps = (state, ownProps) => {
  return {
    business: state.entities.businesses[ownProps.match.params.businessId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow)