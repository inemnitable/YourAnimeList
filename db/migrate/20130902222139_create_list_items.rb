class CreateListItems < ActiveRecord::Migration
  def change
    create_table :list_items do |t|
      t.integer :user_id, null: false
      t.integer :anime_id, null: false
      t.integer :episodes_seen
      t.string :comment
      t.string :status, null: false

      t.timestamps
    end

    add_index :list_items, :user_id
    add_index :list_items, :anime_id
    add_index :list_items, [:user_id, :anime_id], unique: true
  end
end
