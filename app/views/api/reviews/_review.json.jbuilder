json.extract! review, :id, :body, :rating
json.authorId review.author_id
json.businessId review.business_id
json.author do
  json.partial! 'api/users/user', user: review.author
end
json.createdAt review.created_at
json.updatedAt review.updated_at
