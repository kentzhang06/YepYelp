import React from 'react';

const BusinessIndexItem = ({ business, index }) => {
  const randomIndex = Math.floor(Math.random() * business.images.length);
  const photo = (business.images) ?
    
    <img className={'business-preview-image'} src={business.images[randomIndex].url} alt="" /> 

    :
    <div></div>;

  return (
    <li className='single-business-item'>
      {photo}
      <div className='business-item-content'>
        <t>{ index }. {business.name} </t><br /> <br />
        <p>Address: {business.address} </p><br />
        <p>City: {business.city} </p><br />
        <p>State: {business.state} </p><br /><br />
      </div>
    </li>
  )
}

export default BusinessIndexItem;