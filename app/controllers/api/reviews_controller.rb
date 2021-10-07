class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:update, :create, :delete]

  def index
    @reviews = Review.where(business_id: params[:business_id])
    render :index
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    @review.business_id = params[:business_id]

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review.author_id == current_user.id && @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review.author_id == current_user.id
      @review.destroy
      render :show
    else
      render json: ['Review does not exist'], status: 404
    end
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating)
  end


end
