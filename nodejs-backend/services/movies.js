const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this._collection = 'movies';
    this._mongoDb = new MongoLib();
  }

  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } }
    const movies = await this._mongoDb.getAll(this._collection, query);
    return movies || [];
  }

  async getMovie({ movieId }) {
    const movie = await this._mongoDb.get(this._collection, movieId);
    return movie || {};
  }

  async createMovie({ movie }) {
    const createMovieId = await this._mongoDb.create(this._collection, movie);
    return createMovieId;
  }

  async updateMovie({ movieId, movie } = {}) {
    const updatedMovieId = await this._mongoDb.update(this._collection, movieId, movie);
    return updatedMovieId;
  }

  async deleteMovie({ movieId }) {
    const deletedMovieId = await this._mongoDb.delete(this._collection, movieId);
    return deletedMovieId;
  }

  async patchMovie({ movieId, movie }) {
    const patchedMovieId = await this._mongoDb.update(this._collection, movieId, movie);
    return patchedMovieId;
  }
}

module.exports = MoviesService;
