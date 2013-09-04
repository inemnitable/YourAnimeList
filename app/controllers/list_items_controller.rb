class ListItemsController < ApplicationController
  before_filter :require_list_item_owner

  def update
    if @list_item.update_attributes(params[:list_item])
      render :show
    else
      render json: @list_item.errors.full_messages
    end
  end

  def require_list_item_owner
    @list_item = ListItem.includes(:anime, :user).find(params[:id])
    unless @list_item.user == current_user
      head 403
    end
  end
end
