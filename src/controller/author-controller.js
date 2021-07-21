const { validationResult } = require("express-validator");
const authorService = require("../service/author-service");

async function create(req, res, next) {
  try {
    const validateError = validationResult(req);
    if (!validateError.isEmpty()) {
      return res.status(400).json({ error: validateError.array() });
    }

    const author = req.body;

    res.send(await authorService.create(author));
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const validateError = validationResult(req);
    if (!validateError.isEmpty()) {
      return res.status(400).json({ error: validateError.array() });
    }
    const author = req.body;

    res.send(await authorService.update(author));
  } catch (error) {
    next(error);
  }
}

async function deleteById(req, res, next) {
  try {
    const authorId = req.params.id;

    await authorService.deleteOne(authorId);

    res.end();
  } catch (error) {
    next(error);
  }
}

async function get(req, res, next) {
  try {
    res.send(await authorService.get());
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const authorId = req.params.id;

    res.send(await authorService.getById(authorId));
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  update,
  deleteById,
  get,
  getById,
};
