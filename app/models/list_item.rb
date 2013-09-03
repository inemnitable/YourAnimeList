class ListItem < ActiveRecord::Base
  STATUSES = ["Completed", "Watching", "Dropped", "Plan to Watch", "On Hold"]
  attr_accessible :anime_id, :comment, :episodes_seen, :user_id, :status
  belongs_to :anime
  belongs_to :user

  validates_presence_of :anime, :user, :status
  validates_uniqueness_of :anime_id, scope: :user_id
  validates_inclusion_of :status, in: STATUSES


end
