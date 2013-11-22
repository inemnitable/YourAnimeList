class SessionsController < ApplicationController
  before_filter :require_logged_in, only: :destroy

  def new
    @page_id = "login"
    @user = User.new
  end

  def create
    @user = User.find_by_username(params[:user][:username])
    if @user && @user.verify_password(params[:user][:password])
      login(@user)
      redirect_to list_url(@user.username)
    else
      @errors = @user.errors.full_messages
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end

end
