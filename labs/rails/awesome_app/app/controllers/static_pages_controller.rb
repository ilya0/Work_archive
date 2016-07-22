class StaticPagesController < ApplicationController

  def form

    # when this is empty the controller goes to the views folder
  end



# this is the submit method that is being accessed with the submit button
  def submit
    data = request.request_parameters
    #{:email=> 'user@email.com'}

  if data[:email] != '' && data[:message]!=''
    render({plain: 'Message recieved'})
  else
    render({plain: 'Missing text'})

  end





end
end

