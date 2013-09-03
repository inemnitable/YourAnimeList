class ListsController < ApplicationController
  def show
    @page_id = "lists/#{params[:id]}"
    @user = User.find_by_username(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json do
        @list_items = @user.list_items.includes(:anime)
        render :show, handlers: [:rabl]
      end
    end
  end
end
