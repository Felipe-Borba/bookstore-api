const service = require("../service/book-info-service")

async function createBookInfo(req, res, next) {
  try {
    const bookInfo = req.body;

    res.send(await service.createBookInfo(bookInfo))
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createBookInfo
}