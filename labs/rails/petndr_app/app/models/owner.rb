
  # create_table "owners", force: :cascade do |t|
  #   t.string   "name"
  #   t.string   "email"
  #   t.date     "born_on"
  #   t.datetime "created_at", null: false
  #   t.datetime "updated_at", null: false
  # end



class Owner < ActiveRecord::Base

  has_many(:pets) #active record association and creates methods on the model
  #creats a .pets method
  # "SELECT * FROM pets WHERE owner_id=?"


def fullname

"#{self.first_name} + #{self.last_name}"
end








end



