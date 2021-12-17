class LanguagesController < ApplicationController

    def create
        language = @current_user.languages.create(language_params)
        if language.valid?
            render json: language, status: :ok
        else
            render json: {error: "PLease fill out all forms"}, status: :expectation_failed
        end
    end

    def show
        render json: @current_user.languages, status: :ok
    end

    def index
        render json: @current_user.languages.last, status: :ok
    end

    def destroy
        language = Language.find_by(id: params[:id])
        language.destroy
        head :no_content
    end

    private

    def language_params
        params.permit(:expertise, :rating, :user_id)
    end
end
