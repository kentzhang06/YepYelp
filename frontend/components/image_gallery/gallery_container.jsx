import { connect } from "react-redux";
import Gallery from "./gallery";

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

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);