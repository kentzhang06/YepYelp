import React from "react";
import BusinessIndexItem from "./business_index_item";
import SearchBar from "../search_bar/search_bar";
import { Link } from "react-router-dom";
import NavSearchBar from "../nav_search_bar/nav_search_bar";

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
          <NavSearchBar />
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