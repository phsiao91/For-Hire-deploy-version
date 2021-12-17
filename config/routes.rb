Rails.application.routes.draw do
  
  resources :mes
  resources :hobbies
  resources :socials
  resources :tasks
  resources :languages
  resources :educations
  resources :introductions
  resources :work_histories
  resources :bios
  resources :users


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/userdelete", to: "users#destroy"
  patch "/userupdate", to: "users#update"
  post "/bios", to: "bios#create"
  get "/mybio", to: "bios#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/workhistories", to: "work_histories#create"
  get "/mywork", to: "work_histories#index"
  get "/allwork", to: "work_histories#show"
  post "/tasks", to: "tasks#create"
  get "/mytask", to: "tasks#index"
  get "/firsttask", to: "tasks#first"
  post "/languages", to: "languages#create"
  get "/mylanguages", to: "languages#show"
  post "/introductions", to: "introductions#create"
  get "/myintro", to: "introductions#index"
  post "/educations", to: "educations#create"
  get "/myeducation", to: "educations#index"
  get "/alleducation", to: "educations#show"
  post "/socials", to: "socials#create"
  get "/mysocials", to: "socials#index"
  post "hobbies", to: "hobbies#create"
  get "/myhobbies", to: "hobbies#index"
end
