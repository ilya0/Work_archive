require_relative 'mammals'

class Cat < Mammal

  attr_accessor :name, :breed, :age
  attr_reader :species

  def initialize(name,breed,age)
    @name=name
    @breed=breed
    @age=age
    @species = "cat"
    super()

  end

  def speak
    "Moaw"
  end


end

