import React from "react";
import BusinessIndexItem from "./business_index_item";
import NavSearchBarContainer from "../nav_search_bar/nav_search_bar_container";

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const { businesses, history } = this.props;

    let displayBusinesses = businesses.map((business, i) => {
      return (
        <BusinessIndexItem index={i+1} key={business.id} business={business}/>
      )
    });

    return(
      <div>
        <div className="sticky-search-nav">
          <NavSearchBarContainer />
        </div>
        <div className='business-main'>
          <div id='filter-side-bar'>
            Filters
          </div>
          <ul>
            <h1>The Best 10 Restaurants near San Francisco, 94112</h1>
            <h2>All Results </h2>
            { displayBusinesses }
          </ul>
          <div id='map'>
            Map
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessIndex;