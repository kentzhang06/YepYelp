class Business < ApplicationRecord
  validates_presence_of :name, :address, :city, :state, :zip_code, :url, :owner_id
  validates_uniqueness_of :name, :address, :url
  validate :ensure_photo

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: 'User'

  has_many :business_cuisines,
    foreign_key: :business_id,
    class_name: 'BusinessCuisine'

  has_many :cuisines,
    through: :business_cuisines,
    source: :cuisine

  has_many_attached :photos

  def ensure_photo
    unless self.photos.attached?
      errors[:business] << "Must be attached"
    end
  end

  def self.filter_businesses(keyword, location, bounds)
    latmin, latmax = bounds[:southWest][:lat], bounds[:northEast][:lat]
    lngmin, lngmax = bounds[:southWest][:lng], bounds[:northEast][:lng]
    keyword = (keyword) ? keyword.downcase : "" 
    location = (location) ? location.downcase : "" 
    if (!keyword && !location)
      Business.all
    else
      Business.joins(:cuisines)
        .where("(lower(cuisines.cuisine_type) LIKE ?) OR (lower(businesses.name) LIKE ?)", "%#{keyword}%", "%#{keyword}%")
        .where("(lower(businesses.city) LIKE ?) OR (lower(businesses.zip_code) LIKE ?)", "%#{location}%", "%#{location}%")
        .where("businesses.lat BETWEEN ? AND ?", latmin, latmax)
        .where("businesses.long BETWEEN ? AND ?", lngmin, lngmax)

      # Business.where("lower(name) LIKE ?", "%#{keyword.downcase}%")
    end
  end
end

#Business.joins(:cuisines).where("(lower(cuisines.cuisine_type) LIKE ?) OR (lower(businesses.name) LIKE ?)", "%barbecue%", "%barbecue%").where("businesses.lat BETWEEN ? AND ?", 37.73, 37.7796).where("businesses.long BETWEEN ? AND ?",-122.5017,-122.2016)
# Business.joins(:cuisines).where("(lower(cuisines.cuisine_type) LIKE ?) OR (lower(businesses.name) LIKE ?)", "%barbecue%", "%barbecue%").where("(lower(businesses.city) LIKE ?) OR (lower(businesses.zip_code) LIKE ?)", "%san%", "%san%")