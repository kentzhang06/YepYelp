class Review < ApplicationRecord
  validates_presence_of :body, :author_id, :business_id, :rating
  default_scope { order("updated_at DESC") }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :business,
    foreign_key: :business_id,
    class_name: 'Business'
end
