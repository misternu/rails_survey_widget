class SessionsController < ApplicationController
  def new
    render 'login'
  end

  def create
    user = User.find_by(username: session_params[:username])
    if user && user.authenticate(session_params[:password])
      session[:user_id] = user.id
      redirect_to '/'
    else
      render 'login'
    end
  end

  def destroy
    session.clear
    redirect_to '/'
  end

  private
  def session_params
    params.require(:session).permit(:username, :password)
  end
end
