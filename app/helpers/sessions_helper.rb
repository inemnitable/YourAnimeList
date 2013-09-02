module SessionsHelper
  def current_user
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in
  end

  def login(user)
    session[:token] = user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
  end

end
