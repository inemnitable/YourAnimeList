YAL::Application.routes.draw do
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]
  resources :lists, only: [:show]
  resources :list_items, only: [:new, :edit, :create, :update, :destroy]
  get 'anime/search' => 'anime#search'
  resources :anime, only: [:new, :index, :show, :create, :update]
  root :to => 'root#root'


end
