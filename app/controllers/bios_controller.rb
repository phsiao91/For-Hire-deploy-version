class BiosController < ApplicationController
    # skip_before_action :confirm_authentication
    def index
        render json: Bio.all
    end

    def create
        bio = @current_user.bios.create(bio_params)
        if bio.valid?
            render json: bio, status: :ok
        else
            render json: {errors: "Please fill out all the forms"}, status: :expectation_failed
        end
    end

    def index
        render json: @current_user.bios.last, status: :ok
    end

    def destroy
        bio = Bio.find_by(id: params[:id])
        bio.destroy
        head :no_content
    end

    private

    def bio_params
        params.permit(:image, :name, :address, :phone, :email, :github, :user_id)
    end
end
