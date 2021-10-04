class Business < ApplicationRecord
  validates_presence_of :name, :address, :city, :state, :zip_code, :url, :owner_id
  validates_uniqueness_of :name, :address, :url
  validate :ensure_photo

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: 'User'

  has_many_attached :photos

  def ensure_photo
    unless self.photos.attached?
      errors[:business] << "Must be attached"
    end
  end

  def self.filter_by_keyword(keyword)
    Business.where("lower(name) LIKE ?", "%#{keyword.downcase}%")
  end
end
