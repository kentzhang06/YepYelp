import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions"
import BusinessShow from "../businesses/business_show";
import { fetchReviews } from "../../actions/review_actions"

const mapStateToProps = (state, ownProps) => {
  return {
    business: state.entities.businesses[ownProps.match.params.businessId],
    reviews: Object.values(state.entities.reviews)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow)