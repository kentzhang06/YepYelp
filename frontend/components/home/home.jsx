import React from "react";
import naruto from '../../../app/assets/images/naruto-ramen.png';
import fishIcon from '../../../app/assets/images/fish.png';
import NavBarContainer from "../nav_bar/nav_bar_container";
import SearchBar from "../search_bar/search_bar";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <NavBarContainer />

        <div id='home-main'>
          <div id='home-logo'>
            <ion-icon name="fish"></ion-icon>
            <img id='fish-icon' src={fishIcon} alt="fishicon" />
            <h2>YEPYELP</h2>
          </div>
          <SearchBar />
          <img id="naruto-home" src={naruto} alt="naruto" />
        </div>
      </div>
    )
  }
}

export default Home;