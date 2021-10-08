import { connect } from "react-redux";
import { createReview, fetchReviews } from "../../actions/review_actions";
import ReviewForm from "./review_form";
import { getCurrentUser } from "../../actions/session_actions";
import { fetchBusiness } from "../../actions/business_actions";

const mapStateToProps = ( {entities, session}, ownProps) => {
  return {
    business: entities.businesses[ownProps.match.params.businessId],
    currentUser: entities.users[session.id],
    reviews: Object.values(entities.reviews)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    fetchBusiness:(businessId) => dispatch(fetchBusiness(businessId)),
    formAction: (review) => dispatch(createReview(review)),
    formType: 'Create Review'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);