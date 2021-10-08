import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions"
import BusinessShow from "../businesses/business_show";
import { fetchReviews, deleteReview } from "../../actions/review_actions"

const mapStateToProps = ({entities, session}, ownProps) => {
  return {
    business: entities.businesses[ownProps.match.params.businessId],
    reviews: Object.values(entities.reviews),
    currentUser: entities.users[session.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    deleteReview: (review) => dispatch(deleteReview(review))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow)