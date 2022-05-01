const axios = require("axios");
const Movie = require("../models/moviesModel");
const { deleteMovieFromSubscriptions } = require("../services/subscriptionServices")

const getAllMovies = () => {
  return new Promise((resolve, reject) => {
    Movie.find({}, async (err, movies) => {
      if (err) {
        reject(err);
      } else {
        resolve(movies);
      }
    });
  });
};

const getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    Movie.findById(id, (err, movie) => {
      if (err) {
        reject(err);
      } else {
        resolve(movie);
      }
    });
  });
};

const addMovie = (newMovie) => {
  return new Promise((resolve, reject) => {
    const movie = new Movie(newMovie);
    movie.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Movie added successfully");
      }
    });
  });
};

const editMovie = (id, updatedMovie) => {
  return new Promise((resolve, reject) => {
    Movie.findByIdAndUpdate(id, updatedMovie, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Movie updated successfully");
      }
    });
  });
};

const deleteMovie = (id) => {
  return new Promise((resolve, reject) => {
    Movie.findByIdAndDelete(id, (err) => {
      if (err) {
        reject(err);
      } else {
        try {
          deleteMovieFromSubscriptions(id)
        } catch (error) {
          console.log(error);
        }
        resolve("Movie Deleted successfully");
      }
    });
  });
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  editMovie,
  deleteMovie,
};
