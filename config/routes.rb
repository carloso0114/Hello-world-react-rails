Rails.application.routes.draw do
  root 'static#index'
  namespace 'api' do
    resources :messages, only: [:index]
  end
end
