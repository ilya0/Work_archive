# class Droids

#   attr_accessor :name,:power,:droid,:excited

#    def initialize(name)
#     @name = name
#     @power = false
#     @droid = true
#     @excited = " "

#    end



#   def is_a?
#     puts droid
#   end



#   def status
#     if @power == true
#       "Hello Sir! #{name}at your servisio, mane"
#     else
#       "droid is off"
#     end
#   end






#   def on!
#     "Droid #{name} powered on"
#     @power = true

#   end



# end



 class ExcitedString
  attr_accessor :excited

   def initialize(excited)
    @excited = excited
    @text = "!"

   end

  def excited
    "#{excited}#{text}"
  end

end

