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

  def self.filter_by_keyword(keyword)

    if (!keyword)
      Business.all
    else
      Business.joins(:cuisines).where("(lower(cuisines.cuisine_type) LIKE ?) OR (lower(businesses.name) LIKE ?)", "%#{keyword.downcase}%", "%#{keyword.downcase}%")
      # Business.where("lower(name) LIKE ?", "%#{keyword.downcase}%")
    end
  end
end
