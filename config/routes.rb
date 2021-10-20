Rails.application.routes.draw do
  root 'static#index'
  namespace 'api' do
    resources :messages, only: [:index]
  end
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
