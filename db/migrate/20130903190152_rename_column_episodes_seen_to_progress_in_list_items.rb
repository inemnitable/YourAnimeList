class RenameColumnEpisodesSeenToProgressInListItems < ActiveRecord::Migration
  def change
    rename_column :list_items, :episodes_seen, :progress
  end
end
