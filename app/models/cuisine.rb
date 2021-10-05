class Cuisine < ApplicationRecord
  validates_presence_of :cuisine_type

  has_many :business_cuisines,
    foreign_key: :cuisine_id,
    class_name: 'BusinessCuisine'

  has_many :businesses,
    through: :business_cuisines,
    source: :business
end
