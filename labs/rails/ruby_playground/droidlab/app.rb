# require_relative 'astromech_droid'
# require_relative 'protocol_droid'
require_relative 'droids'

# c3po = ProtocolDroid.new('C3PO')
# r2d2 = AstromechDroid.new('R2D2')

# c3po.is_a? #=> true
# r2d2.is_a? #=> true

# c3po.status #=> "Protocol Droid C3PO is currently powered off"
# r2d2.status #=> "Astromech Droid R2D2 is currently powered off"

# c3po.on!    #=> true
# r2d2.on!    #=> true

# c3po.status #=> "Hello Sir! Protocol Droid C3PO at your service."
# r2d2.status #=> "Beep Bop Boop"



str = ExcitedString.new("Ok")
str.is_a?(String) #=> true
str.excited #=> "Ok!"
