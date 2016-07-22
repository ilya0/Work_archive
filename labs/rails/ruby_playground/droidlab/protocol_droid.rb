require_relative 'droids'

class ProtocolDroid < Droids

  attr_accessor :name,:power,:droid

  def initialize(name)
    @name = name
    @power = false
    @droid =true
    super(@name)
  end

end

