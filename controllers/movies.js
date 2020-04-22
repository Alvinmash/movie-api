const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}



const getMovieByTitle = (request, response) => {
  const { title } = request.params

  const movie = movie.find((movie) => movie.Title === title.toLowerCase())

  return movie
    ? response.send(movie)
    : response.status(404).send('movie not found')
}


const getMovieByDirectors = (request, response) => {
  const { directors } = request.params

  const movie = directors.find((director) => movie.director === director.toLowerCase())

  return directors
    ? response.send(directors)
    : response.status(404).send('director  not found')
}



const allMovies = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('check the required fields! thankyou ')
  }

  const Movie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(Movie)

  return response.status(201).send(Movie)
}


module.exports = { getAllMovies, getMovieByTitle, allMovies, getMovieByDirectors }
