class ListsController < ApplicationController
  def show
    @user = User.find_by_username(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render :show, handlers: [:rabl] }
    end
  end
end
