class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
  
    @businesses = Business.filter_businesses(params[:keyword], params[:location], params[:bounds], params[:price])
    
    render :index
  end

  def show
    @business = Business.with_attached_photos.includes(:cuisines, :reviews).find_by(id: params[:id])
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
