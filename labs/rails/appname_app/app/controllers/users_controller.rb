class UsersController < ApplicationController
#   def index

# qs = request.query_parameters
# if qs[:search] == 'a'
#   render({plain: 'has a'})
# else
#   render({plain: 'doesnt have a'})
# end
# end
  # def home
  # end

  # def about
  # end

  def create

  data = request.request_parameters

if data[:name].length == 0
   render({plain: "data not entered sucka"})

else
   render({plain: "dataenteredereeded"})

  end
end


end
