class TasksController < ApplicationController

    def create
        task = @current_user.work_histories.last.tasks.create(task_params)
        if task.valid?
            render json: task, status: :created
        else
            render json: {errors: "Please fill out all the forms"}, status: :expectation_failed
        end
    end

    def index
        render json: @current_user.work_histories.last.tasks, status: :ok
    end

    def first
        render json: @current_user.work_histories.first.tasks, status: :ok
    end


    def destroy
        task = Task.find_by(id: params[:id])
        task.destroy
        head :no_content
    end

    private

    def task_params
        params.permit(:details, :work_history_id)
    end
end
