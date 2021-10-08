import { connect } from "react-redux";
import { editReview, fetchReviews } from "../../actions/review_actions";
import ReviewForm from "./review_form";
import { getCurrentUser } from "../../actions/session_actions";
import { fetchBusiness } from "../../actions/business_actions";

const mapStateToProps = ( {entities, session}, ownProps) => {
  return {
    business: entities.businesses[ownProps.match.params.businessId],
    currentUser: entities.users[session.id],
    review: entities.reviews[ownProps.match.params.reviewId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    fetchBusiness:(businessId) => dispatch(fetchBusiness(businessId)),
    formAction: (review) => dispatch(editReview(review)),
    formType: 'Edit Review'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);