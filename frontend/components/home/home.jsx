import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import { Link } from "react-router-dom";
import SearchBarContainer from "../search_bar/search_bar_container";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <NavBarContainer />

        <div id='home-main'>
          <Link id='home-logo' to='/'>
            <div>
              <ion-icon name="fish"></ion-icon>
              <img id='fish-icon' src={window.fishUrl} alt="fishicon" />
            </div>
            <h2>YEPYELP</h2>
          </Link>
          <SearchBarContainer />
          <img id="naruto-home" src={window.narutoRamenUrl} alt="naruto" />
        </div>
      </div>
    )
  }
}

export default Home;