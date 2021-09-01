export interface People {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string | null;
    deathday: string | null;
    gender: number;
    homepage: string | null;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string | null;
    popularity: number;
    profile_path: string | null;
}

export interface Images {
    id: string;
    profiles: {
        aspect_ratio: number;
        file_path: string;
        height: number;
        iso_639_1: null;
        vote_avg: number | null;
        vote_count: number;
        width: number;
    }[];
}

export interface About {
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    vote_average: number;
    vote_count: number;
}

export interface Movie extends About {
    adult: boolean;
    otiginal_title: string;
    release_date: string;
    title: string;
    video: boolean;
}

export interface TV extends About {
    credit_id: string;
    episod_count: number;
    first_air_date: string;
    name: string;
    original_name: string;
    origin_country: string[];
}

export interface MovieCast extends Movie {
    character: string;
    credid_id: string;
}

export interface MovieCrew extends Movie {
    department: string;
    job: string;
}

export interface TVCast extends TV {
    character: string;
}

export interface TVCrew extends TV {
    department: string;
    job: string;
}

export interface MovieCredits {
    id: number;
    cast: MovieCast[];
    crew: MovieCrew[];
}

export interface TVCredits {
    id: number;
    cast: TVCast[];
    crew: TVCrew[];
}
