json.extract! business, :id, :name, :address, :city, :state, :url, :phone, :lat, :long
json.zipCode business.zip_code
json.ownerId business.owner_id
json.priceRange business.price_range
json.openingHours business.opening_hours
json.imgUrls business.photos do |photo|
  json.url url_for(photo)
end


