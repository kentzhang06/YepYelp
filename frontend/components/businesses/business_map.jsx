import React from "react";
import MarkerManager from "../../util/marker_manager";

class BusinessMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { filters } = this.props;
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 12
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);

    // add eventListener
    this.map.addListener('idle', () => {
      let latLngBounds = this.map.getBounds();
      let nE = latLngBounds.getNorthEast();
      let sW = latLngBounds.getSouthWest();

      let neLat = nE.lat();
      let neLng = nE.lng();

      let swLat = sW.lat();
      let swLng = sW.lng();

      const bounds = { northEast: {lat: neLat, lng: neLng}, southWest: { lat: swLat, lng: swLng} };
      this.props.updateSearchFilters({
        keyword: filters.keyword,
        price: filters.price,
        location: filters.location,
        bounds: bounds
      });
    })

  }

  componentDidUpdate(prevProps, prevState) {
    const { filters, businesses } = this.props;
    if (prevProps.filters != this.props.filters) {
      this.props.updateSearchFilters({
        keyword: filters.keyword,
        price: filters.price,
        location: filters.location,
        bounds: ""
      });
    }
    this.MarkerManager.updateMarkers(businesses);
  }

  render() {
    return (
      <div id='map-container' key={this.props.filters} ref={ map => this.mapNode = map }> 

      </div>
    )
  }

}

export default BusinessMap;