class Business < ApplicationRecord
  validates_presence_of :name, :address, :city, :state, :zip_code, :url, :owner_id
  validates_uniqueness_of :name, :address, :url
  validate :ensure_photo

  belongs_to :owner,
    class_name: 'User'

  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:busienss] << "Must be attached"
    end
  end
end
