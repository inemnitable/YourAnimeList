class ListItem < ActiveRecord::Base
  STATUSES = ["Completed", "Watching", "Dropped", "Plan to Watch", "On Hold"]
  attr_accessible :anime_id, :comment, :progress, :user_id, :status, :rating
  belongs_to :anime
  belongs_to :user

  validates_presence_of :anime, :user, :status
  validates_uniqueness_of :anime_id, scope: :user_id
  validates_inclusion_of :status, in: STATUSES
  validates_numericality_of :rating,
                            allow_nil: true,
                            only_integer: true,
                            greater_than_or_equal_to: 0,
                            less_than_or_equal_to: 10
  validates_numericality_of :progress,
                            allow_nil: true,
                            only_integer: true,
                            greater_than_or_equal_to: 0
  validate :progress_not_greater_than_total_episodes

  def progress_not_greater_than_total_episodes
    if self.anime.episode_count && self.progress > self.anime.episode_count
      self.errors << "You can't watch more episodes than exist..."
    end
  end


end
