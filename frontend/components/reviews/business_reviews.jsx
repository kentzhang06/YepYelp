import React from "react";
import { withRouter } from "react-router";

class BusinessReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { reviews, history, match, currentUser } = this.props;
    const editReviewButton = (review) => (review.author.id === currentUser.id) ?
      <button className="review-delete-edit-buttons"
        onClick={() => history.push(`/businesses/${match.params.businessId}/reviews/${review.id}`)}>
        <ion-icon name="create-outline"></ion-icon>
        <span className="tooltiptext">Write an update</span>
      </button>
      : <div></div>;
    
    const deleteReviewButton = (review) => (review.author.id === currentUser.id) ?
    <button className="review-delete-edit-buttons"
      onClick={() => this.props.deleteReview(review)}>
      <ion-icon name="trash"></ion-icon>
      <span className="tooltiptext">Remove review</span>
    </button>
    : <div></div>;
    

    const displayReviews = reviews.map((review, i) => {
      return (
        <div className="single-review-container" key={review.id}>
          <div className="stars-date">
            <div className={`review-${review.rating}star`}>
              {/* <img className="stars" src={window.starsUrl} alt="" /> */}
            </div>
            <div>{review.createdAt.slice(0, 10)}</div>
          </div>
          <div className="review-content">
            <div>
              {review.author.firstName} {review.author.lastName}
            </div>
            <div className="review-body">
              {review.body}
            </div>
          </div>
          <div className="review-buttons-container">
            { deleteReviewButton(review) }
            { editReviewButton(review) }
          </div>
        </div>
      )
    });

    return (
      <ul>
        {displayReviews}
      </ul>
    )
  }
}

export default withRouter(BusinessReviews);