class Shelter

 def initialize(name)
@name = name
@animalsin={}
@clientsin=[]

# 	9 - a) The Shelter class should have an initialize method.
# 	  	b) The initialize method should accept a name argument, and set it to @name.
# 	  	c) The shelter needs to have a record of the animals it has, and the clients it has too.
#          So, inside the initialize method let's set @animals to be an empty hash, and @clients
# 		   to an empty array.

 end

 def add_client(clientin)
 @clientsin.push(clientin)
end


def add_animal(animalsin,key)
  @animalsin[:key] = animalsin
# 	10 - a) Give the Shelter class a method called add_client
# 		 b) This method should accept a client as an argument, and add this to the
# 			shelter's array of clients
#
# 	11 - a) Give the Shelter class a method called add_animal
# 		 b) This method should accept an animal as an argument.
# 			We want to add the animal to the shelter's hash of animals. For record-keeping
# 			purposes, the 'key' of each animal should be a unique number (e.g. its object_id), while
# 			the 'value' of the animal should be the actual animal itself.
end
end
