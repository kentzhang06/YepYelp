import React from "react";
import { withRouter } from "react-router";
import { parseCategory, parseLocation } from "../../util/business_util";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: parseCategory(this.props.history),
      location: parseLocation(this.props.history),
      bounds: ""
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

  componentDidMount() {
    this.props.updateKeyword(this.state.search);
    this.props.updateLocation(this.state.location);
  }

  submitSearch() {
    this.props.updateLocation(this.state.location);
    this.props.updateKeyword(this.state.search);
    
    if (this.state.search || this.state.location){
      this.props.history.push(`/businesses?keyword=${this.state.search}&location=${this.state.location}`);
    }else {
      this.props.history.push(`/businesses`);
    }
    
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <form id="search-form">
          <span className="search-label" id="find-label">Find</span>

          <input type="text" value={this.state.search} placeholder="restaurants, villages, academies..." onChange={this.searchCategory}/>
          <span className="search-label">Near</span>
          <input type="text" value={this.state.location} placeholder="San Francisco, CA" onChange={this.searchLocation}/>
          <button onClick={this.submitSearch}><ion-icon name="search-outline"></ion-icon></button>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar);