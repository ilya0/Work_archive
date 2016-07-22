class Animal

attr_reader :name,:breed,:gender
attr_accessor :age


def initialize(name,breed,age,gender)
@name = name
@breed = breed
@age = age
@favorite_toys = []


# 	4 - Make a class of Animal (THIS IS DONE FOR YOU!)
# 	5 - Give this class an initialize method that takes name, breed, age, and gender
# 	    as arguments, and assigns them to instance variables.
# 	6 - In the initialize method, also add @favorite_toys as an empty array. When we create a new animal,
# 		its favorite toys will be an empty array by default.
# 	7 - Use the attr_reader, attr_writer, or attr_accessor methods to do the following:
# 		a) Make name, breed, age, and gender read-only (after-all, these are *mostly* things that won't change)
# 		b) Make favorite_toys readable AND writable (we should be able to see AND modify it)

end
