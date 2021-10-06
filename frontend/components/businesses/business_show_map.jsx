import React from "react";
import MarkerManager from "../../util/marker_manager";

class BusinessShowMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { business } = this.props;
    
    // set the map to show SF
    const mapOptions = {
      center: { lat: business.lat, lng: business.long }, // this is SF
      zoom: 15
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    let icon = {
      url: window.uchihaUrl, // url
      scaledSize: new google.maps.Size(25, 30), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0), // anchor
      labelOrigin: new google.maps.Point(5, -6)
    };

    const marker = new google.maps.Marker({
      position: {lat: business.lat, lng: business.long},
      title: business.name,
      animation: google.maps.Animation.DROP,
      icon: icon
    })
    marker.setMap(this.map);

  }

  render() {
    if (!this.props.business) return null;
    return (
      <div id='business-show-map' ref={ map => this.mapNode = map }> 

      </div>
    )
  }

}

export default BusinessShowMap;