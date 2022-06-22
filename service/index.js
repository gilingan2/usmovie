import axios from './axios'

export const moviesEndpoint = {
  getMovies: (category, params) => {
    const url = `movie/${category}`

    return axios.get(url, params)
  },

  getMoviesById: (id, params) => {
    const url = `movie/${id}`

    return axios.get(url, params)
  },

  getMoviesTopRated: (params) => {
    const url = 'movie/top_rated'

    return axios.get(url, params)
  },
  getMoviesUpcoming: (params) => {
    const url = 'movie/upcoming'

    return axios.get(url, params)
  },
  getMoviesPopular: (params) => {
    const url = 'movie/popular'

    return axios.get(url, params)
  },
  getMoviesPlaying: (params) => {
    const url = 'movie/now_playing'

    return axios.get(url, params)
  },
}

export const tvEndpoint = {
  getTV: (category, params) => {
    const url = `tv/${category}`

    return axios.get(url, params)
  },
  getTvById: (id, params) => {
    const url = `tv/${id}`

    return axios.get(url, params)
  },
  getTvTopRated: (params) => {
    const url = 'tv/top_rated'

    return axios.get(url, params)
  },
  getTvAiring: (params) => {
    const url = 'tv/airing_today'

    return axios.get(url, params)
  },
  getTvPopular: (params) => {
    const url = 'tv/popular'

    return axios.get(url, params)
  },
  getTvOnTheAir: (params) => {
    const url = 'tv/on_the_air'

    return axios.get(url, params)
  },
}
