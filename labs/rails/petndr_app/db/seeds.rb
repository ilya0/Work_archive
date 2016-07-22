# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


#empty out any previsous owner rows
Owner.destroy_all
#empty out any previsous pet rows
Pet.destroy_all



#currently in mem up till save command
o1 = Owner.new
o1.first_name = "Gary"
o1.last_name ="Busey"
o1.email ='gdawg@movie.biz'

#saves to db
o1.save

o2 = Owner.create{
first_name: 'Sigh',
last_name: 'Singh',
email: 'Jailbird@google.com'
  })

o2.save

p1 = Pet.create({name:rocky, owner_id:o1.id})
p2 = Pet.create({name:bullwinkle,owner_id:o1.id})
p3 = Pet.create({name:rockyboxer})
p4 = Pet.create({name:chaz})

