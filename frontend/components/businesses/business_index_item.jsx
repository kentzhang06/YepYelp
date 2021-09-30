import React from 'react';

const BusinessIndexItem = ({ business, index }) => {
  const photo = (business.imgUrl) ? <img className={'business-preview-image'} src={business.imgUrl} alt="sushi" /> : <div></div>;
  return (
    <li className='single-business-item'>
      {photo}
      <div>
        { index } <br />
        Name: {business.name} <br />
        Address: {business.address} <br />
        City: {business.city} <br />
        State: {business.state} <br /><br />
      </div>
    </li>
  )
}

export default BusinessIndexItem;