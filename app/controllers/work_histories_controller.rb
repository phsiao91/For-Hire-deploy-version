class WorkHistoriesController < ApplicationController
    # skip_before_action :confirm_authentication

    def create
        
        wh = @current_user.work_histories.create(wh_params)
        if wh.valid?
            render json: wh, status: :created
        else
            render json: {error: "Please fill out all the forms"}, status: :expectation_failed
        end
    end

    def index
        render json: @current_user.work_histories.last, status: :ok
    end

    def destroy
        wh = WorkHistory.find_by(id: params[:id])
        wh.destroy
        head :no_content
    end
    
    def show
        render json: @current_user.work_histories.all, status: :ok
    end

    private

    def wh_params
        params.permit(:title, :company, :start_date, :end_date, :user_id)
    end
end
