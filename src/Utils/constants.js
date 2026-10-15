export const API_OPTIONS = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
        }
        };

export const USER_LOGO = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const MOVIE_GENRES = ["Now playing", "Trending", "Action", "Thriller", "Comedy", "Drama"];

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  //   { identifire: "en", name: "English" },
];
