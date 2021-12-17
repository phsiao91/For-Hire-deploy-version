class SocialsController < ApplicationController

    def create
        social = @current_user.socials.create(social_params)
        if social.valid?
            render json: social
        else
            render json: {errors: "Please fill out all the forms"}, status: :expectation_failed
        end
    end

    def index
        render json: @current_user.socials.last, status: :ok
    end

    private

    def social_params
        params.permit(:facebook, :instagram, :twitter, :linkedin, :user_id)
    end
end
