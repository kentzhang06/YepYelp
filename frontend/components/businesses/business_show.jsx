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

          <span id="address-string">
            { business.address} { business.city}, { business.state }, { business.zipCode } <img src={window.directionUrl} alt="" />
          </span>
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
      :<div></div>

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
            <div id="loc-hours-content">
              <div id="loc-map">
                MAP
              </div>
        
              {hoursTable}

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