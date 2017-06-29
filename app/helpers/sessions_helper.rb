module SessionsHelper
  def current_user
    return nil unless session[:user_id]
    User.find(session[:user_id])
  end
  alias_method :logged_in, :current_user

  def login_link
    logged_in ? link_to("Logout", logout_url) : link_to("Login", login_url)
  end
end
