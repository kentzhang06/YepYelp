import React from "react";
import NavSearchBarContainer from "../nav_search_bar/nav_search_bar_container";

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
    .then(() => window.scrollTo(0, 0));
  }

  render() {
    const { business } = this.props;

    let display = (business) ?
      <div className="business-title">
        { business.name } <br />
        <p>
          <b>
            <div id="claimed-section">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <div>Claimed</div>
            </div>
            <div>&#8226;</div>
            <div>
              {'$'.repeat(business.priceRange)}
            </div>
          </b>
          <p>
            Hours: { business.openingHours }
          </p>
        </p>
      </div>
      : <div></div>;

    let imageBackground = (business) ?
      business.images.map((image, i) => {
        if (i < 5) {
          return (
            <img key={i} src={image.url} alt=""/>
          )
        }
      })
      : <div></div>;
    
    let businessInfo = (business) ?
      <div id="business-info-right">
        <div id="business-url">
          { business.url } <img src={window.redirectUrl} alt="" />
        </div>
        <div id="business-phone">
          { business.phone } <img src={window.phoneUrl} alt="" />
        </div>
        <div id="business-address">

          <a target="_blank" href={`https://www.google.com/maps/dir//${business.lat},${business.long}`}>Get Directions</a>

          <p>
            { business.address} { business.city}, { business.state }, { business.zipCode } <img src={window.directionUrl} alt="" />
          </p>
        </div>
      </div>
      : <div></div>;

    return(
      <div>
        <NavSearchBarContainer />
        <div className="business-image-background">
          { imageBackground }
          { display }
        </div>
        <div className="business-content">
          <div id="business-main-content">
            <div id="business-buttons">
              <button id="business-review-button"><ion-icon name="star-outline"></ion-icon>   Write a Review</button>
            </div>
            <div className="review-container">
              REVIEW 1
            </div>
          </div>
          {businessInfo}
        </div>
      </div>
    )
  }
}

export default BusinessShow;