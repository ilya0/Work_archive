require_relative 'Dog'


class Labrador < Dog

  attr_accessor :name,:age


    def initialize(name,age)
    @name=name
    @age=age
  super(name,age,"labrador")

end



  def labtest
    "Lab says bowchicklabrador"

  end


end



