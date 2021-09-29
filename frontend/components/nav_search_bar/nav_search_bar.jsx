import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";
import { withRouter } from "react-router";

class NavSearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return(
      <div className='nav-search-bar'>
        <div id='nav-bar-logo' onClick={() => history.push('/')}>
          <ion-icon name="fish"></ion-icon>
          <img id='fish-icon' src={window.fishUrl} alt="fishicon" />
          <h2>YEPYELP</h2>
        </div>
        <SearchBar />
        <button id="write-review-button">Write a Review</button>
      </div>
    )
  }
}

export default withRouter(NavSearchBar);