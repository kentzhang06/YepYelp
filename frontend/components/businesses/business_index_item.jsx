import React from 'react';

const BusinessIndexItem = ({ business, index, img }) => {
  return (
    <li className='single-business-item'>
      <img className={'business-preview-image'} src={img} alt="sushi" />
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