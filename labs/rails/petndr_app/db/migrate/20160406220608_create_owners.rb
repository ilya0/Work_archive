class CreateOwners < ActiveRecord::Migration
  def change
    create_table :owners do |t|
      t.string :name
      t.string :email
      t.date :born_on
# create two colmns in teh tables
#create_at,updated_at
      t.timestamps null: false
    end
  end
end
