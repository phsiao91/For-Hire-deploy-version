class HobbiesController < ApplicationController

    def create
        hobby = @current_user.hobbies.create(hobby_params)
        if hobby.valid?
            render json: hobby, status: :ok
        else
            render json: {errors: "Please fill out all the forms"}, status: :expectation_failed
        end
    end

    def index
        render json: @current_user.hobbies.all, status: :ok
    end

    private

    def hobby_params
        params.permit(:description, :user_id)
    end
end
