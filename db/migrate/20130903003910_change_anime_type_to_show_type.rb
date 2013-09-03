class ChangeAnimeTypeToShowType < ActiveRecord::Migration
  def change
    rename_column :animes, :type, :show_type
  end
end
