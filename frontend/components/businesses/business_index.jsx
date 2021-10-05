import React from "react";
import BusinessIndexItem from "./business_index_item";
import NavSearchBarContainer from "../nav_search_bar/nav_search_bar_container";
import { businessIncludesCuisine, businessIncludesPrice } from "../../util/business_util";

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cuisine: "none",
      price: "none"
    }

    this.allCategories = [
      "Barbecue",
      "Sushi",
      "Soup",
      "Shabu",
      "Dessert",
      "Seafood"
    ]

    this.handleCategoryBox = this.handleCategoryBox.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleCategoryBox(field, e) {
    if((this.state).field === e.target.value) {
      this.setState({ [field]: "none"});
    } else {
      this.setState({ [field]: e.target.value, checked: true });
    }
    this.props.history.push(`/businesses`);
    this.props.updateKeyword("");
  }

  handlePrice(n, e) {
    this.setState({ price: n });
    console.log(this.state.price)
    this.props.history.push(`/businesses`);
    this.props.updateKeyword("");
  }

  render() {
    const { businesses, history } = this.props;
    if (!businesses) return null;

    let index = 1;
    let displayBusinesses = businesses.map((business, i) => {
      if ((businessIncludesCuisine(business, this.state.cuisine) || businessIncludesPrice(business, this.state.price)) || (this.state.cuisine === "none") && (this.state.price === "none")) {
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
    let headerCategory = "The Best 10";
    let keyword = history.location.search.slice(9);

    if(keyword) {
      headerCategory = keyword.charAt(0).toUpperCase() + keyword.slice(1);
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
          </div>
          <ul>
            <h1>{headerCategory} Restaurants near San Francisco, 94112</h1>
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