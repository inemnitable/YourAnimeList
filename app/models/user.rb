require 'bcrypt'

class User < ActiveRecord::Base
  attr_accessible :email, :password, :username
  validates_format_of :email,
    with: /\A[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\Z/
  validates_format_of :username, with: /[A-Za-z]{3,}/
  validates_presence_of :username, :email, :password_digest, :session_token

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def verify_password(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(32)
  end

  def reset_session_token!
    self.reset_session_token
    self.save!
    self.session_token
  end
end
