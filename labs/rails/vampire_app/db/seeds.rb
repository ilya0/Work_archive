# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


vampires = Vampire.create([
{name:"Kate", sire:"medium",age:1,country_of_origin:"Sesame Street", number_of_victims:100},
{name:"Matt", sire:"hella strong",age: 12,country_of_origin: "Pasadena", number_of_victims:101},
{name:"Phil", sire:"decaf",age:14,country_of_origin:"Pensylvania", number_of_victims:50}
  ])
