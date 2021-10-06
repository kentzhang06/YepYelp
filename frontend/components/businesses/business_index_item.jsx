import React from 'react';
import { withRouter } from 'react-router';
import { cuisinesToString } from '../../util/business_util';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    const {business, index, history} = this.props
    if (!business) return null;
    const randomIndex = Math.floor(Math.random() * business.images.length);
    const photo = (business.images) ?
      <img className={'business-preview-image'} src={business.images[0].url} alt="" /> 
      :
      <div></div>;
    
    const displayCuisines = business.cuisines.map((cuisine, i) => {
      return (
        <div id="cuisine-bullet" key={i}>

          <div>{cuisine.cuisine}</div>
          <span>&#8226;</span>
        </div>
      )
      });
    

    return (
      <li className='single-business-item' onClick={() => history.push(`/businesses/${business.id}`)}>
        {photo}
        <div className='business-item-content'>
          <span>{ index }. {business.name} </span><br /> <br />
          <p>Address: {business.address} </p><br />
          <p>City: {business.city} </p><br />
          <p>State: {business.state} </p><br />
          <p>Zip Code: {business.zipCode} </p><br />
          <div className="item-cuisines">
            {displayCuisines}
            <div> {'$'.repeat(business.priceRange)} </div>
          </div>
        </div>
      </li>
    )
  }
}

export default withRouter(BusinessIndexItem);