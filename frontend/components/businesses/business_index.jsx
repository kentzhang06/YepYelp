import React from "react";
import BusinessIndexItem from "./business_index_item";
import SearchBar from "../search_bar/search_bar";

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const { businesses } = this.props;

    let displayBusinesses = businesses.map((business, i) => {
      return (
        <BusinessIndexItem index={i+1} key={business.id} business={business}/>
      )
    });

    return(
      <div>
        <SearchBar />
        <ul>
          { displayBusinesses }
        </ul>
      </div>
    )
  }
}

export default BusinessIndex;