// import React from "react";
// import MarkerManager from "../../util/marker_manager";

// class BusinessShowMap extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     const { business } = this.props;
//     // set the map to show SF
//     const mapOptions = {
//       center: { lat: business.lat, lng: business.long }, // this is SF
//       zoom: 15
//     };

//     // wrap this.mapNode in a Google Map
//     this.map = new google.maps.Map(this.mapNode, mapOptions);
//     this.MarkerManager = new MarkerManager(this.map);

//     let icon = {
//       url: window.uchihaUrl, // url
//       scaledSize: new google.maps.Size(25, 30), // scaled size
//       origin: new google.maps.Point(0, 0), // origin
//       anchor: new google.maps.Point(0, 0), // anchor
//       labelOrigin: new google.maps.Point(5, -6)
//     };

//     const marker = new google.maps.Marker({
//       position: {lat: business.lat, lng: business.long},
//       title: business.name,
//       label: {text: business.name, color: "black", fontWeight: "900", fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif"},
//       animation: google.maps.Animation.DROP,
//       icon: icon
//     })
//     marker.setMap(this.map);

//   }

//   // componentDidUpdate(prevProps, prevState) {
//   //   const { filters, businesses } = this.props;
//   //   this.MarkerManager.updateMarkers(businesses);
//   //   // if (prevProps.filters != this.props.filters) {
//   //   //   this.props.updateSearchFilters({
//   //   //     keyword: filters.keyword,
//   //   //     price: filters.price,
//   //   //     location: filters.location,
//   //   //     bounds: ""
//   //   //   });
//   //   // }
//   // }

//   render() {
//     return (
//       <div id='business-show-map' ref={ map => this.mapNode = map }> 

//       </div>
//     )
//   }

// }

// export default BusinessShowMap;