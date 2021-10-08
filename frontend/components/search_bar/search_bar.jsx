import React from "react";
import { withRouter } from "react-router";
import { parseCategory, parseLocation } from "../../util/business_util";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: parseCategory(this.props.history),
      location: parseLocation(this.props.history)
    };
    this.searchCategory = this.searchCategory.bind(this);
    this.searchLocation = this.searchLocation.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  searchCategory(e) {
    this.setState({ search: e.target.value });
  }
  searchLocation(e) {
    this.setState({ location: e.target.value });
  }

  submitSearch() {
    
    if (this.state.search || this.state.location){
      this.props.history.push(`/businesses?keyword=${this.state.search}&location=${this.state.location}`);
      this.props.updateSearchFilters({
        keyword: this.state.search,
        price: "",
        location: this.state.location,
        bounds: ""
      });
    }else {
      this.props.history.push(`/businesses`);
    }
  }

  render() {
    const { history } = this.props;
    return (
      <div key={history}>
        <form id="search-form">
          <div className="search-label" id="find-label">Find</div>

          <input type="text" value={this.state.search} placeholder="restaurants, villages, academies..." onChange={this.searchCategory}/>
          <div className="search-label">Near</div>
          <input type="text" value={this.state.location} placeholder="San Francisco, CA" onChange={this.searchLocation}/>
          <button onClick={this.submitSearch}><ion-icon name="search-outline"></ion-icon></button>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar);