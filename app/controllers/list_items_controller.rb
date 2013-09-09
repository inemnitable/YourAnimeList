class ListItemsController < ApplicationController
  before_filter :require_logged_in
  before_filter :require_list_item_owner, only: [:update]

  def create
    params[:list_item][:user_id] = current_user.id
    @list_item = ListItem.new(params[:list_item])
    if @list_item.save
      render :show
    else
      render json: @list_item.errors.full_messages, status: 422
    end
  end

  def new
    respond_to do |format|
      format.html do
        @page_id = "list_items/new"
        render :new
      end
    end
  end

  def edit
    @list_item = ListItem.find(params[:id])
    @page_id = "list_item/#{params[:id]}/edit"
    render :edit
  end

  def update
    if @list_item.update_attributes(params[:list_item])
      render :show
    else
      render json: @list_item.errors.full_messages, status: 422
    end
  end

  def require_list_item_owner
    @list_item = ListItem.includes(:anime, :user).find(params[:id])
    unless @list_item.user == current_user
      head 403
    end
  end
end
