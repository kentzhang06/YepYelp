Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:show, :create, :destroy]
    resources :businesses, only: [:index, :create]

    resources :businesses, only: [:show] do
      resources :reviews, only: [:index, :create, :update, :destroy]
    end
  end
  root to: 'static_pages#root'
end
