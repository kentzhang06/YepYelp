import React from "react";
import NavSearchBarContainer from "../nav_search_bar/nav_search_bar_container";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    const { business, currentUser, review } = this.props;


      this.state = {
        body: "",
        rating: 5
      }

    this.handleSubmit = this.handleSubmit.bind(this);
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
    });
    history.push(`/businesses/${match.params.businessId}`)
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value});
  }

  render() {
    const { formType, business } = this.props;
    if(!business) return null;

    return(
      <div>
        <NavSearchBarContainer />
        <div className="review-forms-container">
          <h1>
            {business.name}
          </h1>
          <form onSubmit={this.handleSubmit}>
            <input
              className="review-form-body"
              type="textarea"
              placeholder="Great place to eat!"
              value={this.state.body}
              onChange={this.update('body')}
            />
            <button>{formType}</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ReviewForm;