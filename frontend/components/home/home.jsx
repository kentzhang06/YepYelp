import React from "react";
import naruto from '../../../app/assets/images/naruto-ramen.png';
import fishIcon from '../../../app/assets/images/fish.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='home-main'>
        <div id='home-logo'>
          <ion-icon name="fish"></ion-icon>
          <img id='fish-icon' src={fishIcon} alt="fishicon" />
          <h2>YEPYELP</h2>
        </div>
        <img id="naruto-home" src={naruto} alt="naruto" />
      </div>
    )
  }
}

export default Home;