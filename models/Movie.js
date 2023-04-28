const getMovieEN = require('../modules/getMovieEN');
const getMovieES = require('../modules/getMovieES');
const getMoviePosters = require('../modules/getMoviePosters');

class Movie {
  constructor(
    original_title,
    overview,
    poster_path,
    release_date,
    revenue,
    runtime,
    extra_posters,
    MX, ES) {


    this.original_title = original_title;
    this.overview = overview;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.revenue = revenue;
    this.runtime = runtime;
    this.extra_posters = extra_posters;
    this.MX = MX;
    this.ES = ES;
  }

  getMovieInfo() {
    return new Promise(async (resolve, reject) => {
      try {
        let objMX = null;
        let objES = null;
        const movieEN = await getMovieEN();
        const movieES = await getMovieES();
        const moviePosters = await getMoviePosters();

        movieES.forEach(element => {

          if (element.region === 'MX') {
            objMX = element;
          } else {
            objES = element;
          }

        });

        const movie = new Movie(
          movieEN.original_title,
          movieEN.overview,
          movieEN.poster_path,
          movieEN.release_date,
          movieEN.revenue,
          movieEN.runtime,
          moviePosters,
          objMX,
          objES
        );

        resolve(movie);
      } catch (error) {
        reject(error);
      }
    });
  }
};

module.exports = new Movie;