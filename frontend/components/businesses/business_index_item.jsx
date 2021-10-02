import React from 'react';
import { withRouter } from 'react-router';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    const {business, index} = this.props
    const randomIndex = Math.floor(Math.random() * business.images.length);
    const photo = (business.images) ?
      <img className={'business-preview-image'} src={business.images[randomIndex].url} alt="" /> 
      :
      <div></div>; 

    return (
      <li className='single-business-item' onClick={() => this.props.history.push(`/businesses/${business.id}`)}>
        {photo}
        <div className='business-item-content'>
          <span>{ index }. {business.name} </span><br /> <br />
          <p>Address: {business.address} </p><br />
          <p>City: {business.city} </p><br />
          <p>State: {business.state} </p><br /><br />
        </div>
      </li>
    )
  }
}

export default withRouter(BusinessIndexItem);