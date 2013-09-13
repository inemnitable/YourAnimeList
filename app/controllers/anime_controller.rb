class AnimeController < ApplicationController
  before_filter :require_logged_in, only: [:create]

  def new
    @page_id = "anime/new"
    @anime = Anime.new()
    render :new
  end

  def create
    @anime = Anime.new(params[:anime])
    if @anime.save
      render :show
    else
      render :json => @anime.errors.full_messages
    end
  end

  def show
    @anime = Anime.find(params[:id])
    render :show
  end

  def search
    search_str = params[:search]
    anime_ids = current_user.anime_ids
    @anime = anime_ids.count > 0 ?
      Anime.where("LOWER(title) LIKE ? AND id NOT IN (?)",
        "%#{search_str.downcase}%",
        current_user.anime_ids)
        .limit(15) :
      Anime.where("LOWER(title) LIKE ?",
        "%#{search_str.downcase}%")
        .limit(15)
    render :search
  end

  def update
    @anime = Anime.find(params[:id])
    if @anime.update_attributes(params[:anime])
      render :show
    else
      render :json => @anime.errors.full_messages
    end
  end
end
