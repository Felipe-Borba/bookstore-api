const repository = require("../repository/book-info-repository")

async function createBookInfo(bookInfo) {
  return await repository.create(bookInfo);
}

module.exports = {
  createBookInfo
}