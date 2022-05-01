const express = require("express");
const { getAllMovies, getMovieById, addMovie, editMovie, deleteMovie }  = require("../services/movieServices");
const { deleteMovieFromSubscriptions } = require("../services/subscriptionServices")

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const movies = await getAllMovies();
    return res.json(movies);
  } catch (error) {
    return res.json(error);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await getMovieById(id);
    return res.json(movie);
  } catch (error) {
    return res.json(error);
  }
});

router.route("/").post(async (req, res) => {
  try {
    const movie = req.body;
    const result = await addMovie(movie);
    return res.json(result);
  } catch (error) {
    res.json(error);
  }
});

router.route("/:id").put(async (req, res) => {
  try {
    const id = req.params.id;
    const movie = req.body;
    const result = await editMovie(id, movie);
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
});

router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteMovie(id);
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
