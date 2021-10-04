class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @businesses = Business.with_attached_photos.filter_by_keyword(params[:keyword])
    render :index
  end

  def show
    @business = Business.with_attached_photos.find_by(id: params[:id])
    render :show
  end

  def create
    @business = Business.new(business_params)
    @business.owner_id = current_user.id
    if @business.save
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  private
  def business_params
    params.require(:business).permit(:name, :address, :city, :state, :zip_code, :url, photos: [])
  end
end
