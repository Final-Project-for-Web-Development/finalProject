// Call to retrieve a specific movie based on id (used to get more info once id is gotten from search)
export async function getMovieWithID(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0b0d2f38ed62a14bb5bd8993fbcbd35d`)
        .then((response) => {
            return response.json();
        });
}

// Call that retrieves the movies that are now playing, maybe as the default screen before search
export async function getNowPlayingMovies() {
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=0b0d2f38ed62a14bb5bd8993fbcbd35d')
        .then((response) => {
            return response.json();
        })
}

// Call that retrieves movies based on search for title (query parsing in api call or in front end passing to api?)
export function getMovieBySearch(title) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=0b0d2f38ed62a14bb5bd8993fbcbd35d&query=${title}`)
        .then((response) => {
            return response.json();
        });
}

// Call that retrieves the poster for a movie or TV Show. Don't think it's necessary as you can do this directly
// from front-end and put the hyperlink in an image tag, but I figured I'd write the call to get the image
export async function getPoster(posterPath) {
    return fetch(`https://image.tmdb.org/t/p/w500${posterPath}`)
        .then((response) => { return response })
}

// Call to pull the first page of popular movies (should return 20 entries)
export async function getPopularMovies() {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=0b0d2f38ed62a14bb5bd8993fbcbd35d&language=en-US&page=1')
        .then((response) => {
            return response.json();
        })
}

// Call to retrieve a specific TV show based on id (used to get more info once id is gotten from search)
async function getTVShowWithID(id) {
    await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=0b0d2f38ed62a14bb5bd8993fbcbd35d`)
        .then((response) => response.json)
}

// Call that retrieves TV Shows based on search for title (query parsing in api call or in front end passing to api?)
export function getTVShowsBySearch(title) {
    return fetch(`https://api.themoviedb.org/3/search/tv?api_key=0b0d2f38ed62a14bb5bd8993fbcbd35d&query=${title}`)
        .then((response) => {
            response.json();
        });
}

// Call to pull the first page of popular TV shows (should return 20 entries)
export async function getPopularTVShows() {
    return fetch('https://api.themoviedb.org/3/tv/popular?api_key=0b0d2f38ed62a14bb5bd8993fbcbd35d&language=en-US&page=1')
        .then((response) => {
            return response.json();
        })
}
