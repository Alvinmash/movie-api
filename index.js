const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMovieByTitle, getMovieByDirectors, allMovies } = require('./controllers/movies')

const app = express()


app.get('/movies', getAllMovies)

app.get('/movies/:title', getMovieByTitle)

app.get('/movies/:directors', getMovieByDirectors)

app.post('/movies', bodyParser.json(), allMovies)

app.get('*', (request, response) => {
  return response.status(404).send('sorry! movie not found')
})


app.listen(7815, () => {
  console.log(' watching port 7815...')// eslint-disable-line no-console
})
