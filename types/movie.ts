export interface Movie {
    adult: boolean;
    backdrop_path: string;
    budget: number;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieDetails extends Movie {
    belongs_to_collection: { backdrop_path: string, id: number, name: string, poster_path: string } | null;
    genres: { id: number, name: string }[];
    homepage: URL;
    imdb_id: string;
    production_companies: { id: number, logo_path: string, name: string, origin_country: string }[];
    production_countries: { iso_3166: string, name: string };
    spoken_languages: { english_name: string, iso_639_1: string, name: string }[];
    status: string;
    tagline: string;
}

export type Movies = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type Cast = {
    character: string;
    credit_id: string;
    name: string;
    profile_path: string;
};

export type Crew = {
    job: string;
    name: string;
    credit_id: number;
};

export type Credits = {
    id: number;
    cast: Cast[];
    crew: Crew[];
};