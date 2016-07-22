class LoversController < ApplicationController

  def index
    @lovers = Lover.all
  end

  def new
  end

  def create
    # lover = Lover.new
    # lover.name = params[:name]
    # lover.save
    Lover.create(name: params[:lover_name])
    redirect_to '/lovers'
  end

  def destroy
    Lover.find_by(id: params[:id]).destroy
    redirect_to '/lovers'
  end
end
