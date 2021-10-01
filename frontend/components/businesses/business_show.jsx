import React from "react";
import NavSearchBarContainer from "../nav_search_bar/nav_search_bar_container";

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentWillUnmount() {

  }

  render() {
    const { business } = this.props;

    let display = (business) ?
      <div className="business-title">
        { business.name }
      </div>
      : <div></div>;

    let imageBackground = (business) ?
      business.images.map((image, i) => {
        if (i < 5) {
          return (
            <img key={i} src={image.url} alt=""/>
          )
        }
      })
      : <div></div>;

    return(
      <div>
        <NavSearchBarContainer />
        <div className="business-image-background">
          { imageBackground }
          { display }
        </div>
      </div>
    )
  }
}

export default BusinessShow;