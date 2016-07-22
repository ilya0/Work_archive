class LoveLettersController < ApplicationController

  # GET '/love_letters'
  def index
    # SELECT * FROM love_letters
    @love_letters = LoveLetter.all
  end

  # gimme a form to make a love letter
  # GET '/love_letters/new'
  # GET '/love_letters/:lover_id/love_letters/new
  def new
    @lover_id = params[:lover_id]
  end

  # stick this love letter
  # in yer db
  # POST '/love_letters'
  def create
    # this comes from
    # <input type="text" name="message">
    # <input type="hidden" name="lover_id"
    message = params[:message]
    lover_id = params[:lover_id]
    ll = LoveLetter.new
    ll.message = message
    ll.lover_id = lover_id
    # INSERT INTO love_letters
    ll.save
    # LoveLetter.create({message: params[:message], lover_id: params[:lover_id]})
    # get out of there!
    # send back a 302 so the
    # browser does a new GET
    redirect_to '/love_letters'
  end

  # "DELETE" /love_letters/:id
  def destroy
    id = params[:id]
    love_letter = LoveLetter.find_by(id: id)
    love_letter.destroy
    redirect_to '/love_letters'
  end


end
