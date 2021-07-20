const { validationResult } = require("express-validator");
const service = require("../service/book-service")

async function createBookInfo(req, res, next) {
  try {
    const validateError = validationResult(req);
    if (!validateError.isEmpty()) {
      return res.status(400).json({ error: validateError.array() });
    }

    const bookInfo = req.body;
    console.log(bookInfo);
    res.send(await service.createBookInfo(bookInfo))
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createBookInfo
}