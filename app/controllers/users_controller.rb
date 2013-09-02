class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    @user.reset_session_token
    if @user.save
      session[:token] = @user.session_token
      redirect_to root_url
    else
      @errors = @user.errors.full_messages
      render :new
    end
  end

end
