## Demo
Link to live web application: https://yepyelp.herokuapp.com/#/

# ![image](https://user-images.githubusercontent.com/44277861/136591278-f839868e-f44f-4afb-8f5e-2b4d3f6d3c5c.png)
# YepYelp

<table>
<tr>
<td>
  YepYelp is a full stack web application that micmics Yelp.com. A website that allows users to create an account/login to find nearby businesses, filter by keywords/location, visiting business pages, locations on google maps, and write/edit/delete reviews on a business.
</td>
</tr>
</table>

## Technologies Used

BackEnd | Frontend
---|:--
Ruby on Rails | React
PostgreSQL | Redux
AWS S3 | JavaScript ES6
jbuilder | Google Maps API

Ruby on Rails allows for creation of backend routes, database/seeds, and querying functionality through PostgreSQL. As YepYelp is an images reliant full stack web application, utilizing AWS S3 for storing and attaching images through ActiveStorage on the backend is a must. Jbuilder allows us to shape what kind of information is received when making API calls to the backend.

In our frontend, React allows us to optimize our web application into individual communicating components. Using Redux allows for complete communication from the frontend to the backend allowing us to shape our state in the frontend as necessary state slices are used for components. YepYelp also utilizes Google Maps API, requiring an external API key that allows us to render a google maps with business locations as markers.

## Site

### Sign up/ Log in
The sign up page image below displays the front end of the user auth cycle. Sign up and log in displays errors based on necessary fields to fill in or invalid credentials.
![image](https://user-images.githubusercontent.com/44277861/136595306-13410d62-25dd-4c68-b3f8-a1be8c8428aa.png)


### Business Index Page
The business index page displays all businesses searched by keyword/location using the search bar. Creating a filters categories/locations selection on the left and search by keyword/location was one of the challenging factors of this project. A clever way of consistently updating filters is by pushing the url path and adding on a query path with keywords and location. These filters are saved as a component state/props in the necessary components. A filters object is created in the business map component which is the deepest child component, then is sent to the backend to query the database using corresponding ActiveRecord queries to fetch relevant businesses to display.

The Google maps API used allows for bounds to be constructed for a certain lat/long coordinates, these bounds are then sent along with the filters to the backend to display corresponding restaurants based off of map zoom levels.

```javascript
  submitSearch() {
    
    if (this.state.search || this.state.location){
      this.props.history.push(`/businesses?keyword=${this.state.search}&location=${this.state.location}`);
      this.props.updateSearchFilters({
        keyword: this.state.search,
        price: "",
        location: this.state.location,
        bounds: ""
      });
    }else {
      this.props.history.push(`/businesses`);
    }
  }
```

```javascript
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
    });
 ```
![YepYelp - Google Chrome_2](https://user-images.githubusercontent.com/44277861/136594872-974171f2-df55-4240-907b-c720fd46bc8a.jpg)

### Business Show Page
YepYelp's business show page displays a business' hosted images. The view all photos button will redirect the show page to an image gallery containing all images attached to a specific business.

![image](https://user-images.githubusercontent.com/44277861/136595007-4ca4c07b-7325-46f8-99d2-4123907c9b62.png)

![image](https://user-images.githubusercontent.com/44277861/136597859-a3fb9cf5-ac7d-43b8-a866-98cc9226b3a1.png)

Reviews for a specific business are rendered in descending order based on date/time updated. A user's reviews will be the only review items with edit/delete buttons rendered.

```javascript
    const displayReviews = reviews.sort((a, b) => (a.updatedAt < b.updatedAt) ? 1 : -1).map((review) => {
      return (
        <div className="single-review-container" key={review.id}>
          <div className="business-review-author-image">
            <img src={review.author.image} alt="" />
            <div>
              {review.author.firstName} {review.author.lastName}
            </div>
          </div>
          <div className="stars-date">
            <div className={`review-${review.rating}star`}>
              
            </div>
            <div>{review.createdAt.slice(0, 10)}</div>
          </div>
          <div className="review-content">
            <div className="review-body">
              {review.body}
            </div>
          </div>
          <div className="review-buttons-container">
            { deleteReviewButton(review) }
            { editReviewButton(review) }
          </div>
        </div>
      )
    });
    
 ```

![image](https://user-images.githubusercontent.com/44277861/136597940-66636f88-85c0-4f3b-a8f1-475fdb50bd3b.png)


### Review Form Page
YepYelp's review form page allows a logged in user to select a rating on the left side and renders the corresponding rating under the business title. Recent reviews are also rendered on the right hand side.

![image](https://user-images.githubusercontent.com/44277861/136595106-93ed077c-c6c8-49a7-b462-f86d2c48144e.png)

## Future features
- [ ] Utilize Google's Geocode API to convert location string into lat/long boundaries for map to correspond to searched location
- [ ] Add reactions (useful, cool, funny) for reviews
- [ ] Add a featured business page
- [ ] Allow filters to be stacked with multiple cuisines

## References
* Google Maps API
* Images from Yelp.com




