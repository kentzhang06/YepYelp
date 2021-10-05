json.extract! business, :id, :name, :address, :city, :state, :url, :phone, :lat, :long
json.zipCode business.zip_code
json.ownerId business.owner_id
json.priceRange business.price_range
json.openingHours business.opening_hours
json.images business.photos do |photo|
  json.url url_for(photo)
end

json.cuisines do
  json.array! business.cuisines do |cuisine|
    json.cuisine cuisine.cuisine_type
  end
end

