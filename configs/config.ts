const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

const POPULAR_BAES_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const LATEST_BAES_URL = `${API_URL}movie/latest?api_key=${API_KEY}&language=en-US`;
const UPCOMING_BAES_URL = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`;
const TOP_RATED_BAES_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
const NOW_PLAYING_BAES_URL = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US`;

const CREDIT_URL = `${API_URL}person/`;

const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

const BACKDROP_SIZE = "w1280";
const POSTER_SIZE = "w300";
const PROFILE_SIZE = "h632";

export {
    API_KEY,
    API_URL,
    SEARCH_BASE_URL,
    POPULAR_BAES_URL,
    LATEST_BAES_URL,
    UPCOMING_BAES_URL,
    TOP_RATED_BAES_URL,
    NOW_PLAYING_BAES_URL,
    CREDIT_URL,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    PROFILE_SIZE,
};
