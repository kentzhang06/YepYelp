import React from "react";
import BusinessIndexItem from "./business_index_item";
import SearchBar from "../search_bar/search_bar";
import { Link } from "react-router-dom";
import NavSearchBar from "../nav_search_bar/nav_search_bar";

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);

    this.imgs = [window.sushiUrl, boneMarrowRamenUrl, window.curryUrl, window.akiraUrl,
      window.izakayaUrl, window.uniUrl, window.grilledFishUrl, window.hotateUrl, window.okoUrl
    ];

  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const { businesses, history } = this.props;

    let displayBusinesses = businesses.map((business, i) => {
      return (
        <BusinessIndexItem index={i+1} img={this.imgs[i]} key={business.id} business={business}/>
      )
    });

    return(
      <div>
        <NavSearchBar />
        <div className='business-main'>
          <div id='filter-side-bar'>
            Filters
          </div>
          <ul>
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