export const fetchReviews = (businessId) => {
  return $.ajax({
    url: `/api/businesses/${businessId}/reviews`,
    method: 'GET'
  });
}

export const createReview = (review) => {
  return $.ajax({
    url: `/api/businesses/${review.businessId}/reviews`,
    method: 'POST',
    data: {
      review: {
        body: review.body,
        rating: review.rating,
        business_id: review.businessId,
        author_id: review.authorId
      }
    }
  });
};

export const editReview = (review) => {
  return $.ajax({
    url: `/api/businesses/${review.businessId}/reviews/${review.id}`,
    method: 'PATCH',
    data: {
      review: {
        body: review.body,
        rating: review.rating,
        author_id: review.authorId,
        business_id: review.businessId
      }
    }
  });
};

export const deleteReview = (review) => {
  return $.ajax({
    url: `/api/businesses/${review.businessId}/reviews/${review.id}`,
    method: 'DELETE'
  });
}