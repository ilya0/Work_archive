Rails.application.routes.draw do

  post '/love_letters' => 'love_letters#create'
  get '/love_letters/new' => 'love_letters#new'
  get '/love_letters' => 'love_letters#index'
  get '/lovers'       => 'lovers#index'
  get '/lovers/new'   => 'lovers#new'
  post '/lovers'      => 'lovers#create'


  get '/lovers/:lover_id/love_letters/new' => 'love_letters#new'


  delete '/lovers/:id' => 'lovers#destroy'
  delete '/love_letters/:id' => 'love_letters#destroy'

  root 'welcome#index'

end
