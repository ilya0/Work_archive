class BikesController < ApplicationController
  def show
    @bike_number = params[:id]
  end
end
