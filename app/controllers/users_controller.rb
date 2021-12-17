class UsersController < ApplicationController
    skip_before_action :confirm_authentication
    
    
    def show 
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: "Not logged in"}, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        edited_user = User.find_by_id( params[:id] )
        
        if edited_user.update(user_edit_params)
            render json: edited_user
        else
            render json: { errors: edited_user.errors.full_messages }
        end
    end

    def destroy
        user_who_is_ungrateful_and_wants_to_delete_their_account = User.find_by_id( params[:id] )

        session.delete(:user_id)
        user_who_is_ungrateful_and_wants_to_delete_their_account.destroy

        render json: { session_user: session[:user_id] }
    end


    private 
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def user_edit_params
        params.permit(:username)
    end
end
