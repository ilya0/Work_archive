class LoveLetter < ActiveRecord::Base
  # this allows us to call .lover
  # and get the associated Lover Object
  belongs_to(:lover)
end
