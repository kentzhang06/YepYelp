class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip_code, null: false
      t.string :url, null: false
      t.string :phone
      t.integer :owner_id, null: false
      t.string :price_range
      t.string :opening_hours
      t.float :lat
      t.float :long

      t.timestamps
    end
    
    add_index :businesses, :name
    add_index :businesses, :owner_id
  end
end
