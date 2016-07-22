 # create_table "pets", force: :cascade do |t|
 #    t.integer  "owner_id"
 #    t.string   "name"
 #    t.datetime "created_at", null: false
 #    t.datetime "updated_at", null: false
 #  end



class Pet < ActiveRecord::
  belongs_to(:owner) #creates a .owner
  # "SELECT * FROM owner   WHERE id=?"

end
