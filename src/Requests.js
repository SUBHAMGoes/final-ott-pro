const API_KEY = "0cedfb35e9548238f7e7607ae19f0bdf";

const requests = {
    
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:  `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    sfetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;





