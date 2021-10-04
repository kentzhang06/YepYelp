import React from "react";
import NavSearchBarContainer from "../nav_search_bar/nav_search_bar_container";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
      .then(() => window.scrollTo(0, 0))
      .then(() => {
        const modalEle = document.querySelector(".modal");
        const modalImage = document.querySelector(".modalImage");
        Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
          item.addEventListener("click", event => {
            modalEle.style.display = "block";
            modalImage.src = event.target.src;
          });
        });
        const closeEle = document.querySelector(".close")
        if(closeEle) {
          closeEle.addEventListener("click", () => {
            modalEle.style.display = "none";
          });
        };
      });

  }

  render() {
    const { business } = this.props;
    if (!business) return null;

    return (
      <div>
        <NavSearchBarContainer />
        <div className="gallery-content">
          <h1>Photos for {business.name}</h1>
          <div className="images-arrangement">
            {
              business.images.map((image, i) => <img className="ImgThumbnail"  key={i} src={image.url} alt="" />)
            }
          </div>
            
            <div className="modal">
              <span className="close">×</span>
              <img className="modalImage" id="img01" />
            </div>
        </div>
      </div>
    )
  }
}

export default Gallery;