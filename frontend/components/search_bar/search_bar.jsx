import React from "react";
import { withRouter } from "react-router";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.history.location.search.slice(9)
    };
    this.searchCategory = this.searchCategory.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  searchCategory(e) {
    this.setState({ search: e.target.value });
  }

  componentDidMount() {
    this.props.updateKeyword(this.state.search);
  }

  submitSearch() {
    this.props.updateKeyword(this.state.search);
    console.log(this.props.history);
    if (this.state.search){
      this.props.history.push(`/businesses?keyword=${this.state.search}`);
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
          <input type="text" placeholder="San Francisco, CA" />
          <button onClick={this.submitSearch}><ion-icon name="search-outline"></ion-icon></button>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar);