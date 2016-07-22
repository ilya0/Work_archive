class LoveLettersController < ApplicationController


  def index
    @love_letters = LoverLetter.all
  end



  def new
  end




  def create
    message = params[:message]
    ll = Lover_Letter.new
    ll.message = message
    ll.save

    #get out of there!
    # redirect_to '/' # root
    redirect_to '/love_letters'
  end

# "DELETE /love_letters/:id"
  def destroy
    love_letter = Lover_Letter.find_by(id:params[:id])
    love_letter.destroy
    redirect_to '/love_letters'
  end


end
