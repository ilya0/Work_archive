require_relative 'dog'

class Terrier < dog
  attr_accessor :name, :age



  def initialize(name, age)
    @name =name
    @breed = "Terrier"
    @age=age
    super(@name, "Terrier", @age)
  end
end
