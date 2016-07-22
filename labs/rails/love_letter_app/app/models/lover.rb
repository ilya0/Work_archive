class Lover < ActiveRecord::Base
  # this allows us to call .love_letters
  # and get back all the love letters for that
  # lover
  has_many(:love_letters)
end
