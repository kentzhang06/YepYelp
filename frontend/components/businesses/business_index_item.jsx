import React from 'react';
import { withRouter } from 'react-router';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    const {business, index, history} = this.props
    if (!business) return null;
    const photo = (business.images) ?
      <img className={'business-preview-image'} src={business.images[0].url} alt="" /> 
      :
      <div></div>;
    
    const displayCuisines = business.cuisines.map((cuisine, i) => {
      return (
        <div id="cuisine-bullet" key={i}>
          <div className="cuisine">{cuisine.cuisine}</div>
          <div className="bullet">&#8226;</div>
        </div>
      );
      });
    

    return (
      <li
        className="single-business-item"
        onClick={() => history.push(`/businesses/${business.id}`)}
      >
        {photo}
        <div className="business-item-content">
          <span>
            {index}. {business.name}{" "}
          </span>
          <br /> <br />
          <div className="item-cuisines">
            {displayCuisines}
            <div> {"$".repeat(business.priceRange)} </div>
          </div>
          <div className="item-addresses">
            <p>{business.address} </p>
            <br />
            <p>
              {business.city}, {business.state}, {business.zipCode}
            </p>
            <br />
          </div>{" "}
          <br />
          <p>Hours: {business.openingHours}</p>
        </div>
      </li>
    );
  }
}

export default withRouter(BusinessIndexItem);