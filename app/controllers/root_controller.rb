class RootController < ApplicationController
  before_filter :require_logged_in

  def root
    redirect_to list_url(current_user.username)
  end

end
