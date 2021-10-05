class UpdateCuisineColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_null :cuisines, :cuisine_type, false
  end
end
