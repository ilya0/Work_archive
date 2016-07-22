require_relative 'mammals'

class Dog < Mammal
  attr_accessor :name, :breed, :age
  attr_reader :species

  def initialize(name,breed,age)
    @name=name
    @breed=breed
    @age=age
    @species = "dog"
    super()
  end

def breathe
  "pant"
end

end
