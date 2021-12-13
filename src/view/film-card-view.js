import dayjs from 'dayjs';

export const createFilmCardTemplate = (filmCard) => {
  const {
    title,
    rating,
    releaseDate,
    runTime,
    genres,
    poster,
    description,
    comments,
    isInWatchlist,
    isWatched,
    isFavourite} = filmCard;
  const date = dayjs(releaseDate).format('YYYY');


  const addToWatchlist = isInWatchlist
    ? 'film-card__controls-item--active'
    : '';

  const markAsWatched = isWatched
    ? 'film-card__controls-item--active'
    : '';

  const addToFavourites = isFavourite
    ? 'film-card__controls-item--active'
    : '';

  return `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${date}</span>
        <span class="film-card__duration">${runTime}</span>
        <span class="film-card__genre">${genres[0]}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <span class="film-card__comments">${comments.length}</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${addToWatchlist}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${markAsWatched}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${addToFavourites}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};
