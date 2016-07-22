class BeansController < ApplicationController

before_action :set_bean, only: [:show,:edit,:update, :destroy]
# says before you exicute actions, run the private method, only for the [items]
  def index
    @beans = Bean.all
  end



  def show
    # @bean = Bean.find(params[:id    #taken out due to private method and before action intialization])
    # find the postgress created id through the database and put it in the @bean variable
    # params look in the uri, look in that spot and take that value and put it into thes search
  end


  def new
    @bean = Bean.new
  end



  def create
    @bean = Bean.new(bean_params)
# @instance variable
# bean.new active record
# params giving the database a beans hash
# .permit goes into the hash, "whitelisting" or accepting the vales
 #creating new bean, requiring the bean key in the new hash,
    if @bean.save
    #if it saves to database, shows the index


    # redirect_to beans_path  #goes to index
     redirect_to bean_path(@bean) #goes to show page

  else #if it does not save, render the form again so you can try again
    render :new
  end
end



def edit
  # @bean = Bean.find(params[:id])    #taken out due to private method and before action intialization
end



def update
  # @bean = Bean.find(params[:id])    #taken out due to private method and before action intialization

  if @bean.update_attributes(bean_params)
  redirect_to bean_path
else
  render :edit
end
end


def destroy
  # @bean = Bean.find(params[:id])    #taken out due to private method and before action intialization
  @bean.destroy
  redirect_to beans_path
end

  private

    def set_bean
      @bean = Bean.find(params[:id])
    end



    def bean_params
      params.require(:bean).permit(:name, :roast,:origin,:quantity)
    end






end
