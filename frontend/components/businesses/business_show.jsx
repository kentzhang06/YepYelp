import React from "react";
import NavSearchBarContainer from "../nav_search_bar/nav_search_bar_container";
import { withRouter } from "react-router";
import BusinessShowMap from "./business_show_map";
import BusinessReviews from "../reviews/business_reviews";

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
    .then(() => window.scrollTo(0, 0));
    this.props.fetchReviews(this.props.match.params.businessId);
  }

  render() {
    const { business, history, reviews, currentUser, deleteReview } = this.props;
    if (!business || !reviews) return null;
    let directionLink = `https://www.google.com/maps/dir//${business.address}+${business.city}+${business.state}+${business.zipCode}`;

    let display = (business) ?
      <div className="business-title">
        { business.name } <br />
        <div id="info-under-title">
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
        </div>
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
          <span>
            { business.url }
          </span>
          <img src={window.redirectUrl} alt="" />
        </div>
        <div id="business-phone">
          <span>
            { business.phone }
          </span>
          <img src={window.phoneUrl} alt="" />
        </div>
        <div id="business-address">

          <span id="address-with-pic">
            <a target="_blank" href={directionLink}>Get Directions</a>

            <span id="address-string">
              { business.address}, { business.city}, { business.state }, { business.zipCode }
            </span>
          </span>
          <img src={window.directionUrl} alt="" />
        </div>
      </div>
      : <div></div>;
    
    let hoursTable = (business) ?
      <div id="hours-table">
        <div className="day-row">
          <div className="specific-day">Mon</div><div>{business.openingHours}</div>
        </div>
        <div className="day-row">
          <div className="specific-day">Tues</div><div>{business.openingHours}</div>
        </div>
        <div className="day-row">
          <div className="specific-day">Wed</div><div>{business.openingHours}</div>
        </div>
        <div className="day-row">
          <div className="specific-day">Thu</div><div>{business.openingHours}</div>
        </div>
        <div className="day-row">
          <div className="specific-day">Fri</div><div>{business.openingHours}</div>
        </div>
        <div className="day-row">
          <div className="specific-day">Sat</div><div>{business.openingHours}</div>
        </div>
        <div className="day-row">
          <div className="specific-day">Sun</div><div>{business.openingHours}</div>
        </div>
      </div>
      :<div></div>;

    let photosButton = (business) ?
      <button id="photo-button"
        onClick={() => history.push(`/biz_photos/${business.id}`)}
        >View All Photos
      </button>
      : <div></div>;

    return(
      <div>
        <NavSearchBarContainer />
        <div className="business-image-background">
          { imageBackground }
          { display }
          { photosButton }
        </div>
        <div className="business-content">
          <div id="business-main-content">
            <div id="business-buttons">
              <button 
                id="business-review-button"
                onClick={() => history.push(`/businesses/${business.id}/reviews`)}
              >
                <ion-icon name="star-outline"></ion-icon>
                Write a Review
              </button>
            </div>

            <h1>
              Location &#38; Hours
            </h1>
            <div id="loc-hours-content">
              <div>

                <BusinessShowMap business={business} />
                <div id="map-address-stack">
                  <div id="map-address-button">
                    <div id="address-city-state-stack">
                      <div id="map-business-address-line">{business.address}</div>
                      <div>{business.city}, {business.state} {business.zipCode}</div>
                    </div>
                    <button onClick={(e) => {
                      e.preventDefault();
                      window.open(directionLink, '_blank');
                    }}
                    >Get Directions</button>
                  </div>
                </div>
              </div>

        
              {hoursTable}

            </div>
            {/* <div className="review-container">
              REVIEW 1
            </div> */}
            <BusinessReviews reviews={reviews} currentUser={currentUser} deleteReview={deleteReview}/>
          </div>
          {businessInfo}
        </div>
      </div>
    )
  }
}

export default withRouter(BusinessShow);