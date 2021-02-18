const express = require('express');
const slash = require('express-slash');
const MoviesService = require('../services/movies');
const cacheResponse = require('../utils/cacheResponse');
const validationHandler = require('../utils/middleware/validation-handler');
const { movieIdSchema, createMovieSchema, updateMovieSchema } = require('../utils/schema/movies');
const { SIXTY_MINUTES_IN_SECONDS, FIVE_MINUTES_IN_SECONDS } = require('../utils/time');



/**
 * 
 * @param {Express} app 
 */
function moviesApi(app) {
  const router = express.Router();
  app.use("/api/movies", router);
  app.use(slash());

  const moviesService = new MoviesService();

  router.get("/", async function (req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);

    const { tags } = req.query;

    try {
      const movies = await moviesService.getMovies({ tags });
      res
        .status(200)
        .json({
          data: movies,
          message: 'Movies listed'
        })
    } catch (err) {
      next(err);
    }
  });

  router.get(
    "/:movieId",
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);

      const { movieId } = req.params;

      try {
        const movies = await moviesService.getMovie({ movieId });
        res
          .status(200)
          .json({
            data: movies,
            message: 'Movie listed'
          })
      } catch (err) {
        next(err);
      }
    });

  router.post("/",
    validationHandler(createMovieSchema),
    async function (req, res, next) {
      const { body: movie } = req;

      try {
        const createMovieId = await createMovieId({ movie });
        res
          .status(201)
          .json({
            data: createMovieId,
            message: 'Movie created'
          })
      } catch (err) {
        next(err);
      }
    });

  router.put("/:movieId",
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function (req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;

      try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie
        });
        res
          .status(200)
          .json({
            data: updatedMovieId,
            message: 'Movie updated'
          })
      } catch (err) {
        next(err);
      }
    });

  router.delete("/:movieId",
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      const { movieId } = req.params;

      try {
        const deletedMovieId = await moviesService.deleteMovie({ movieId });
        res
          .status(200)
          .json({
            data: deletedMovieId,
            message: 'Movie deleted'
          })
      } catch (err) {
        next(err);
      }
    });

  router.patch("/:movieId",
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function (req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;

      try {
        const patchedMovie = await moviesService.patchMovie({
          movieId,
          movie
        });
        res
          .status(200)
          .json({
            data: patchedMovie,
            message: 'Movie deleted'
          })
      } catch (err) {
        next(err);
      }
    });
}

module.exports = moviesApi;
