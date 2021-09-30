class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :price_range, :integer, using: 'price_range::integer'
  end
end
