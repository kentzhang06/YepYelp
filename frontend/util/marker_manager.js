
export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    let businessObj = {};

    businesses.forEach((business) => {
      this.createMarkerFromBusiness(business);
      businessObj[business.id] = business;
    });

    Object.keys(this.markers).forEach((id) => {
      if (!businessObj[id]) {
        this.removeMarker(this.markers[id]);
        delete this.markers[id];
      }
    })
    
  }

  removeMarker(marker) {
    marker.setMap(null);
  }

  createMarkerFromBusiness(business) {
    if (!this.markers[business.id]) {
      const marker = new google.maps.Marker({
        position: {lat: business.lat, lng: business.long},
        title: business.description
      });
      marker.setMap(this.map);
      this.markers[business.id] = marker;
    }
  }
}