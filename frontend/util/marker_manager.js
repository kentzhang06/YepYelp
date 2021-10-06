
export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    let businessObj = {};

    businesses.forEach((business, i) => {
      this.createMarkerFromBusiness(business, ++i);
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

  toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  createMarkerFromBusiness(business, i) {
    let icon = {
      url: window.uchihaUrl, // url
      scaledSize: new google.maps.Size(25, 30), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0), // anchor
      labelOrigin: new google.maps.Point(5, -6)
    };

    if (!this.markers[business.id]) {
      const marker = new google.maps.Marker({
        position: {lat: business.lat, lng: business.long},
        title: business.name,
        label: {text: business.name, color: "black", fontWeight: "900", fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif"},
        animation: google.maps.Animation.DROP,
        icon: icon
      });

      marker.setMap(this.map);
      this.markers[business.id] = marker;
    }
  }
}