const { validationResult, matchedData } = require("express-validator");
const bookService = require("../service/book-service");

async function create(req, res, next) {
  try {
    const validateError = validationResult(req);
    if (!validateError.isEmpty()) {
      return res.status(400).json({ error: validateError.array() });
    }

    const book = matchedData(req);
    res.send(await bookService.create(book));
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

    const book = matchedData(req);
    res.send(await bookService.update(book));
  } catch (error) {
    next(error);
  }
}

async function deleteOne(req, res, next) {
  try {
    const bookId = req.params.id;

    res.send(await bookService.deleteOne(bookId));
  } catch (error) {
    next(error);
  }
}

async function get(req, res, next) {
  try {
    const filter = { ...req.query };

    res.send(await bookService.get(filter));
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const bookId = req.params.id;

    res.send(await bookService.getById(bookId));
  } catch (error) {
    next(error);
  }
}

async function createBookInfo(req, res, next) {
  try {
    const validateError = validationResult(req);
    if (!validateError.isEmpty()) {
      return res.status(400).json({ error: validateError.array() });
    }

    const bookInfo = matchedData(req);

    res.send(await bookService.createBookInfo(bookInfo));
  } catch (error) {
    next(error);
  }
}

async function updateBookInfo(req, res, next) {
  try {
    const validateError = validationResult(req);
    if (!validateError.isEmpty()) {
      return res.status(400).json({ error: validateError.array() });
    }

    const bookInfo = matchedData(req);

    res.send(await bookService.updateBookInfo(bookInfo));
  } catch (error) {
    next(error);
  }
}

async function deleteInfo(req, res, next) {
  try {
    const bookId = req.params.id;

    res.send(await bookService.deleteInfo(bookId));
  } catch (error) {
    next(error);
  }
}

async function deleteBookInfo(req, res, next) {
  try {
    const bookId = req.params.id;

    res.send(await bookService.deleteBookInfo(bookId));
  } catch (error) {
    next(error);
  }
}

async function createInfo(req, res, next) {
  try {
    const validateError = validationResult(req);
    if (!validateError.isEmpty()) {
      return res.status(400).json({ error: validateError.array() });
    }

    const bookId = req.params.id;
    const review = matchedData(req);

    res.send(await bookService.createInfo(bookId, review));
  } catch (error) {
    next(error);
  }
}

async function deleteInfo(req, res, next) {
  try {
    const bookId = req.params.id;
    const index = req.params.index;

    res.send(await bookService.deleteInfo(bookId, index));
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  update,
  deleteOne,
  get,
  getById,
  createBookInfo,
  updateBookInfo,
  deleteBookInfo,
  createInfo,
  deleteInfo,
};
