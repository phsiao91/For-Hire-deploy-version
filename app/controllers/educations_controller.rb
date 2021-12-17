class EducationsController < ApplicationController

    def create
        education = @current_user.educations.create(education_params)
        if education.valid?
            render json: education, status: :created
        else
            render json: {error: "PLease fill out all forms"}, status: :expectation_failed
        end
    end

    def index
        render json: @current_user.educations.last, status: :ok
    end

    def show
        render json: @current_user.educations.all, status: :ok
    end
    
    private

    def education_params
        params.permit(:school, :degree, :start_date, :end_date, :user_id)
    end
end
