import React from "react";
import BusinessIndexItem from "./business_index_item";
import NavSearchBarContainer from "../nav_search_bar/nav_search_bar_container";
import { businessIncludesCuisine, businessIncludesPrice, businessIncludesLoc, parseCategory, parseLocation, capitalize } from "../../util/business_util";
import BusinessMap from "./business_map";

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: parseCategory(this.props.history),
      price: "",
      location: parseLocation(this.props.history)
    }

    this.allCategories = [
      "Barbecue",
      "Sushi",
      "Soup",
      "Shabu",
      "Dessert",
      "Seafood"
    ];

    this.allLocations = [
      "San Francisco",
      "San Mateo",
      "San Jose"
    ];
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleFilter(field, e) {
    // return (e) => {
    //   this.setState({ [field]: e.target.value });
    //   console.log(this.state);
    // }
    console.log(this.state);
    this.setState({ [field]: e.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.keyword || this.state.location){
    //   this.props.history.push(`/businesses?keyword=${this.state.keyword}&location=${this.state.location}`);
    // }else {
    //   this.props.history.push(`/businesses`);
    // }
    if (prevState.keyword !== this.state.keyword || prevState.location !== this.state.location) {
      this.props.history.push(`/businesses?keyword=${this.state.keyword}&location=${this.state.location}`);
    }
  }

  render() {
    const { businesses, history, updateSearchFilters } = this.props;
    if (!businesses) return null;

    let index = 1;
    let displayBusinesses = businesses.map((business, i) => {
        return (
          <BusinessIndexItem index={index++} key={business.id} business={business}/>
        )
    });

    let categoriesDisplay = this.allCategories.map((category, i) => {
      return (
        <label className="category-radio" key={i}> 
          <input type="radio" name="keyword" value={category} onClick={(e) => this.handleFilter('keyword', e)}/>
          {category}
        </label>
        );
    });

    let locationsDisplay = this.allLocations.map((location, i) => {
      return (
        <label className="category-radio" key={i}> 
          <input type="radio" name="location" value={location} onClick={(e) => this.handleFilter('location', e)}/>
          {location}
        </label>
        );
    });

    let headerCategory = "The Best";
    let keyword = parseCategory(history);
    let locationTitle = "";
    if (this.state.location !== "") {
      locationTitle = this.state.location;
    }
    let loc = parseLocation(history) || locationTitle;

    if(keyword) {
      headerCategory = capitalize(keyword);
    } else if (this.state.keyword !== "") {
      headerCategory = this.state.keyword;
    }

    let displayPriceFilter = 
      <div className="price-filter">
        <button id="price-1" value={1} onClick={(e)=>this.handleFilter('price', e)}>$</button>
        <button id="price-2" value={2} onClick={(e)=>this.handleFilter('price', e)}>$$</button>
        <button id="price-3" value={3} onClick={(e)=>this.handleFilter('price', e)}>$$$</button>
        <button id="price-4" value={4} onClick={(e)=>this.handleFilter('price', e)}>$$$$</button>
      </div>;

    return(
      <div>
        <div className="sticky-search-nav">
          <NavSearchBarContainer key={businesses}/>
        </div>
        <div className='business-main'>
          <div id='filter-side-bar'>
            {displayPriceFilter}
            <h3>
              Categories
            </h3>
            <form className="category-display">
              {categoriesDisplay}
              <label className="category-radio"> 
              <input type="radio" name="keyword" value="" onClick={(e) =>this.handleFilter('keyword', e)}/>
              None
              </label>
            </form>
            <h3>
              Locations
            </h3>
            <form className="location-display">
              {locationsDisplay}
              <label className="category-radio"> 
              <input type="radio" name="location" value="" onClick={(e)=>this.handleFilter('location', e)}/>
              None
              </label>
            </form>
          </div>
          <ul className="business-index-main-content">
            <h1>{headerCategory} Restaurants near {loc}</h1>
            <h2>All Results </h2>
            { displayBusinesses }
          </ul>
          <div id='map'>
            <BusinessMap key={this.state} filters={this.state} businesses={businesses} updateSearchFilters={updateSearchFilters}/>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessIndex;