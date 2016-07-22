class AddLoverIdToLoveLetters < ActiveRecord::Migration
  def change
    add_column(:love_letters, :lover_id, :integer)
  end
end
