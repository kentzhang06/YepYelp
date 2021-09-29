import React from 'react';

const BusinessIndexItem = ({ business, index }) => {
  return (
    <li>
      { index } <br />
      Name: {business.name} <br />
      Address: {business.address} <br />
      City: {business.city} <br />
      State: {business.state} <br /><br />
    </li>
  )
}

export default BusinessIndexItem;