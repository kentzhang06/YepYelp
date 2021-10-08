import React from "react";
import { withRouter } from "react-router";

class BusinessReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { reviews, history, match, currentUser } = this.props;
    
    const editReviewButton = (review) => (currentUser && (review.author.id === currentUser.id)) ?
      <button className="review-delete-edit-buttons"
        onClick={() => history.push(`/businesses/${match.params.businessId}/reviews/${review.id}`)}>
        <ion-icon name="create-outline"></ion-icon>
        <span className="tooltiptext">Write an update</span>
      </button>
      : <div></div>;
    
    const deleteReviewButton = (review) => (currentUser && (review.author.id === currentUser.id)) ?
    <button className="review-delete-edit-buttons"
      onClick={() => this.props.deleteReview(review)}>
      <ion-icon name="trash"></ion-icon>
      <span className="tooltiptext">Remove review</span>
    </button>
    : <div></div>;
    

    const displayReviews = reviews.sort((a, b) => (a.updatedAt < b.updatedAt) ? 1 : -1).map((review) => {
      return (
        <div className="single-review-container" key={review.id}>
          <div className="business-review-author-image">
            <img src={review.author.image} alt="" />
            <div>
              {review.author.firstName} {review.author.lastName}
            </div>
          </div>
          <div className="stars-date">
            <div className={`review-${review.rating}star`}>
              
            </div>
            <div>{review.createdAt.slice(0, 10)}</div>
          </div>
          <div className="review-content">
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