class ApplicationController < ActionController::Base
  include SessionsHelper
  protect_from_forgery

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end
end
