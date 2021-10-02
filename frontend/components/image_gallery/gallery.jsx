import React from "react";
import NavSearchBarContainer from "../nav_search_bar/nav_search_bar_container";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
      .then(() => window.scrollTo(0, 0));
  }

  render() {
    const { business } = this.props;
    const displayImages = (business) ?
      business.images.map((image) => {
        return (
          <div className="medium-6 large-3 xlarge-2">
            <a href="#" data-toggle="galleryModal">
              <img src={image} alt="" />
            </a>
          </div>
        )
      }) : <div></div>;
    return (
      <div>
        <NavSearchBarContainer />
        <h1>Image Modal Gallery Example</h1>
        <img className="ImgThumbnail" src="https://images.pexels.com/photos/3540375/pexels-photo-3540375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        <img className="ImgThumbnail" src="https://i.picsum.photos/id/237/536/354.jpg"/>
        <img className="ImgThumbnail" src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        <div className="modal">
          <span className="close">×</span>
          <img className="modalImage" id="img01" />
        </div>
      </div>
    )
  }
}

export default Gallery;