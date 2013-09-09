class AnimeController < ApplicationController
  def index
    respond_to do |format|
      format.html do
        @page_id = "anime/index"
        render :index
      end
      # format.json do
      #   @anime = Anime.all
      #   render :index, handlers: [:rabl]
      # end
    end
  end

  def show
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
end
