class BusinessCuisine < ApplicationRecord
  validates_presence_of :cuisine_id, :business_id

  belongs_to :cuisine,
    foreign_key: :cuisine_id,
    class_name: 'Cuisine'

  belongs_to :business,
    foreign_key: :business_id,
    class_name: 'Business'
end
