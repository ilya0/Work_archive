  # create_table "characters", force: :cascade do |t|
  #   t.string   "name"
  #   t.string   "power"
  #   t.integer  "age"
  #   t.boolean  "living"
  #   t.datetime "created_at", null: false
  #   t.datetime "updated_at", null: false
  # end





# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# create and new are different, if you want it to save you have to use create new will not save

characters = Character.create([
  {name:'Buffy Anne Summers', power:'slayer', age:35, living:true},
  {name:'Willow Rosenberf', power:'witch', age:35, living:true},
  {name:'Xander Harris', power:'none', age:35, living:true}
  ])
