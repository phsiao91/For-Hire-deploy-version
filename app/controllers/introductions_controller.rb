class IntroductionsController < ApplicationController

    def create
        intro = @current_user.introductions.create(intro_params)
        if intro.valid?
            render json: intro, status: :created
        else
            render json: {error: "PLease fill out all forms"}, status: :expectation_failed
        end
    end

    def index
        render json: @current_user.introductions.last, status: :ok
    end

    def show
        render json: Introduction.all, status: :ok
    end

    private

    def intro_params
        params.permit(:summary, :user_id)
    end
end
