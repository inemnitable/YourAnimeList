class CreateAnimes < ActiveRecord::Migration
  def change
    create_table :animes do |t|
      t.string :title, null: false
      t.string :type, null: false
      t.integer :episode_count

      t.timestamps
    end

    add_index :animes, :title, unique: true
  end
end
