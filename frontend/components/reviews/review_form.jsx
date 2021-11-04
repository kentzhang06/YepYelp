import React from "react";
import NavSearchBarContainer from "../nav_search_bar/nav_search_bar_container";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      rating: 5
    }

    this.ratingId = 'select-review';
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleRating = this.toggleRating.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReviews(this.props.match.params.businessId);
  }

  handleSubmit(e) {
    const { formAction, history, currentUser, match } = this.props;
    e.preventDefault;
    let reviewId = (!match.params.reviewId) ? "" : match.params.reviewId;

    formAction({
      body: this.state.body,
      rating: this.state.rating,
      authorId: currentUser.id,
      businessId: match.params.businessId,
      id: reviewId
    })
    .then(() => history.push(`/businesses/${match.params.businessId}`));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value});
  }

  toggleRating(rating) {
    this.setState({ rating: rating });
  }

  render() {
    const { formType, business, reviews } = this.props;
    if(!business || !reviews) return null;
    const displayRecentReviews = reviews.sort((a, b) => (a.updatedAt < b.updatedAt) ? 1 : -1).map((review) => {
      return (
        <div className="recent-reviews-item" key={review.id}>
          <div className="review-author-image">
            <img src={review.author.image} alt="" />
            <div>{review.author.firstName} {review.author.lastName.charAt(0)}.</div>
          </div>
          <div className="recent-reviews-rating-date">
            <p className={`recent-reviews-item-${review.rating}rating`}></p>
            <p>{review.createdAt.slice(0,10)}</p>
          </div>
          <div>{review.body}</div>
        </div>
      )
    });

    return (
      <div className="form-all-container">
        <NavSearchBarContainer />
        <div className="rating-with-form">
          <div className="all-ratings">
            <div
              className={`review-5star`}
              id="select-review"
              onClick={() => this.toggleRating(5)}
            ></div>
            <div
              className={`review-4star`}
              id="select-review"
              onClick={() => this.toggleRating(4)}
            ></div>
            <div
              className={`review-3star`}
              id="select-review"
              onClick={() => this.toggleRating(3)}
            ></div>
            <div
              className={`review-2star`}
              id="select-review"
              onClick={() => this.toggleRating(2)}
            ></div>
            <div
              className={`review-1star`}
              id="select-review"
              onClick={() => this.toggleRating(1)}
            ></div>
          </div>
          <div className="review-forms-container">
            <h1>{business.name}</h1>
            <div
              className={`review-${this.state.rating}star`}
              id="chosen-rating"
            ></div>
            <form onSubmit={this.handleSubmit}>
              <textarea
                className="review-form-body"
                placeholder="Great place to eat!"
                value={this.state.body}
                onChange={this.update("body")}
              />
              <button>{formType}</button>
            </form>
          </div>
        </div>
        <div className="recent-reviews">
          <h2>Recent Reviews</h2>
          {displayRecentReviews}
        </div>
      </div>
    );
  }
}

export default ReviewForm;