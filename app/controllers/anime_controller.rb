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
    @anime = Anime.where('LOWER(title) LIKE ?', "%#{search_str.downcase}%")
    render :search
  end
end
