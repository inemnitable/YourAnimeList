# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130903190152) do

  create_table "animes", :force => true do |t|
    t.string   "title",         :null => false
    t.string   "show_type",     :null => false
    t.integer  "episode_count"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  add_index "animes", ["title"], :name => "index_animes_on_title", :unique => true

  create_table "list_items", :force => true do |t|
    t.integer  "user_id",    :null => false
    t.integer  "anime_id",   :null => false
    t.integer  "progress"
    t.string   "comment"
    t.string   "status",     :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "rating"
  end

  add_index "list_items", ["anime_id"], :name => "index_list_items_on_anime_id"
  add_index "list_items", ["user_id", "anime_id"], :name => "index_list_items_on_user_id_and_anime_id", :unique => true
  add_index "list_items", ["user_id"], :name => "index_list_items_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "username",        :null => false
    t.string   "email",           :null => false
    t.string   "password_digest", :null => false
    t.string   "session_token",   :null => false
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["session_token"], :name => "index_users_on_session_token", :unique => true
  add_index "users", ["username"], :name => "index_users_on_username", :unique => true

end
