import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form id="search-form">
          <span className="search-label" id="find-label">Find</span>

          <input type="text" placeholder="restaurants, villages, academies..." />
          <span className="search-label">Near</span>
          <input type="text" placeholder="San Francisco, CA" />
          <button><ion-icon name="search-outline"></ion-icon></button>
        </form>
      </div>
    )
  }
}

export default SearchBar;