import React from "react";
import BusinessIndexItem from "./business_index_item";
import NavSearchBarContainer from "../nav_search_bar/nav_search_bar_container";
import { businessIncludesCuisine, businessIncludesPrice, businessIncludesLoc, parseCategory, parseLocation, capitalize } from "../../util/business_util";
import BusinessMap from "./business_map";

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cuisine: "none",
      price: "none",
      loc: "none"
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

    this.handleCategoryBox = this.handleCategoryBox.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleCategoryBox(field, e) {
    if((this.state).field === e.target.value) {
      this.setState({ [field]: "none"});
    } else {
      this.setState({ [field]: e.target.value });
    }
    this.props.history.push(`/businesses`);
    this.props.updateSearchFilters("", "", "");
  }

  handlePrice(n, e) {
    this.setState({ price: n });
    console.log(this.state.price)
    this.props.history.push(`/businesses`);
    this.props.updateSearchFilters("", "", "");
  }

  render() {
    const { businesses, history, updateSearchFilters } = this.props;
    if (!businesses) return null;

    let index = 1;
    let displayBusinesses = businesses.map((business, i) => {
      if ((businessIncludesCuisine(business, this.state.cuisine) || (this.state.cuisine === "none")) &&
        (businessIncludesPrice(business, this.state.price) || (this.state.price === "none")) &&
        (businessIncludesLoc(business, this.state.loc) || (this.state.loc === "none")) ){
        return (
          <BusinessIndexItem index={index++} key={business.id} business={business}/>
        )
      }
    });

    let categoriesDisplay = this.allCategories.map((category, i) => {
      return (
        <label className="category-radio" key={i}> 
          <input type="radio" name="cuisine" value={category} onClick={(e) => this.handleCategoryBox('cuisine', e)}/>
          {category}
        </label>
        );
    });

    let locationsDisplay = this.allLocations.map((location, i) => {
      return (
        <label className="category-radio" key={i}> 
          <input type="radio" name="loc" value={location} onClick={(e) => this.handleCategoryBox('loc', e)}/>
          {location}
        </label>
        );
    });

    let headerCategory = "The Best";
    let keyword = parseCategory(history);
    let locationTitle = "";
    if (this.state.loc !== "none") {
      locationTitle = this.state.loc;
    }
    let loc = parseLocation(history) || locationTitle;

    if(keyword) {
      headerCategory = capitalize(keyword);
    } else if (this.state.cuisine !== "none") {
      headerCategory = this.state.cuisine;
    }

    let displayPriceFilter = 
      <div className="price-filter">
        <button id="price-1" onClick={(e) => this.handlePrice(1, e)}>$</button>
        <button id="price-2" onClick={(e) => this.handlePrice(2, e)}>$$</button>
        <button id="price-3" onClick={(e) => this.handlePrice(3, e)}>$$$</button>
        <button id="price-4" onClick={(e) => this.handlePrice(4, e)}>$$$$</button>
      </div>;

    return(
      <div>
        <div className="sticky-search-nav">
          <NavSearchBarContainer/>
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
              <input type="radio" name="cuisine" value="none" onClick={(e) => this.handleCategoryBox('cuisine', e)}/>
              None
              </label>
            </form>
            <h3>
              Locations
            </h3>
            <form className="location-display">
              {locationsDisplay}
              <label className="category-radio"> 
              <input type="radio" name="loc" value="none" onClick={(e) => this.handleCategoryBox('loc', e)}/>
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
            <BusinessMap businesses={businesses} updateSearchFilters={updateSearchFilters}/>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessIndex;