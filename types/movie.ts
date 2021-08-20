export interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    budget: number;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    revenue: number;
    runtime: number;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieDetails extends Movie {
    belongs_to_collection: {
        backdrop_path: string;
        id: number;
        name: string;
        poster_path: string;
    } | null;
    genres: { id: number; name: string }[];
    homepage: string | null;
    imdb_id: string | null;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: { iso_3166: string; name: string }[];
    spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
    status:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";
    tagline: string | null;
}

export interface Movies {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

interface Persons {
    adult: boolean;
    credit_id: string;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
}

export interface Cast extends Persons {
    cast_id: number;
    character: string;
    order: number;
}

export interface Crew extends Persons {
    department: string;
    job: string;
}

export interface Credits {
    id: number;
    cast: Cast[];
    crew: Crew[];
}
