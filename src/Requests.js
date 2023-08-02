const key = 'e4afb5a7b4261eacb224c8dab621e278';

const requests = {
    Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    Trending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,    
};

export default requests;
