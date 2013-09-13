YAL::Application.routes.draw do
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]
  resources :lists, only: [:show]
  resources :list_items, only: [:create, :update, :destroy]
  get 'anime/search' => 'anime#search'
  resources :anime, only: [:show, :create, :update]
  root :to => 'root#root'


end
