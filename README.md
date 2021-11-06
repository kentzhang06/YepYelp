## Demo
Link to live web application: https://yepyelp.herokuapp.com/#/

![yelp-project2](https://user-images.githubusercontent.com/44277861/140584379-4afcaa34-15f0-4d7f-b9b0-6dd77e90d8fe.gif)

![image](https://user-images.githubusercontent.com/44277861/140584485-f26f1950-7f6f-42a2-9dca-c2a038a43abd.png)

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
![image](https://user-images.githubusercontent.com/44277861/140584524-8ac993c6-2363-407c-b649-86eef805e69c.png)


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
![image](https://user-images.githubusercontent.com/44277861/140584596-9846d9a4-5485-4a4e-a66a-f8bc088a764c.png)

### Business Show Page
YepYelp's business show page displays a business' hosted images. The view all photos button will redirect the show page to an image gallery containing all images attached to a specific business.

![image](https://user-images.githubusercontent.com/44277861/140584627-15d83a30-f097-4f61-b933-98aa95829aad.png)

![image](https://user-images.githubusercontent.com/44277861/140584720-1ef0e883-8d67-4425-8490-5c71a74d4ac4.png)

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

![image](https://user-images.githubusercontent.com/44277861/140584767-3e622bf9-56b7-4155-8266-34ed705d8e04.png)


### Review Form Page
YepYelp's review form page allows a logged in user to select a rating on the left side and renders the corresponding rating under the business title. Recent reviews are also rendered on the right hand side.

![image](https://user-images.githubusercontent.com/44277861/140584789-06c25026-9d63-429f-a46b-26a22c45197a.png)

## Future features
- [ ] Utilize Google's Geocode API to convert location string into lat/long boundaries for map to correspond to searched location
- [ ] Add reactions (useful, cool, funny) for reviews
- [ ] Add a featured business page
- [ ] Allow filters to be stacked with multiple cuisines

## References
* Google Maps API
* Images from Yelp.com




