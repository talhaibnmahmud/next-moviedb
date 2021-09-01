import { Movie, Movies } from "@interfaces/movie";
import {
    API_KEY,
    API_URL,
    SEARCH_BASE_URL,
    POPULAR_BAES_URL,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL,
} from "./config";

const defaultConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
};

const apiSettings = {
    fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
        const endpoint = searchTerm
            ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
            : `${POPULAR_BAES_URL}&page=${page}`;

        return await (await fetch(endpoint)).json();
    },
};

export { apiSettings };
