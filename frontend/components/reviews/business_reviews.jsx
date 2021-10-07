import React from "react";

class BusinessReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { reviews } = this.props;

    const displayReviews = reviews.map((review) => {
      return (
        <div className="single-review-container">
          <div key={review.id} className={`review-${review.rating}star`}>
            {/* <img className="stars" src={window.starsUrl} alt="" /> */}
          </div>
          <div className="review-content">
            <div>
              {review.author.firstName} {review.author.lastName}
            </div>
            <div>
              {review.body}
            </div>
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

export default BusinessReviews;