const bookInfoRepository = require("../repository/book-info-repository");
const bookRepository = require("../repository/book-repository");

async function create(book) {
  // TODO do not create if author don't exist
  return await bookRepository.create(book);
}

async function update(book) {
  // TODO nome e autor can not be updated
  return await bookRepository.update(book);
}

async function deleteOne(bookId) {
  // TODO do not delete if book has sold
  return await bookRepository.deleteOne(bookId);
}

async function get(filter) {
  if (filter.autorId) {
    return await bookRepository.getByAuthorId(filter.autorId);
  }
  return await bookRepository.get();
}

async function getById(bookId) {
  const book = await bookRepository.getById(bookId);
  const bookInfo = await bookInfoRepository.getByBookId(bookId);
  return {
    book,
    bookInfo,
  };
}

async function createBookInfo(bookInfo) {
  const mayBeBookInfo = await bookInfoRepository.getByBookId(bookInfo.livroId);
  if (mayBeBookInfo) {
    throw new Error("this bookInfo already exist");
  }
  //TODO do not create bookInfo if bookId don't exist
  return await bookInfoRepository.create(bookInfo);
}

async function updateBookInfo(bookInfo) {
  return await bookInfoRepository.update(bookInfo);
}

async function deleteBookInfo(bookId) {
  return await bookInfoRepository.deleteOne(bookId);
}

async function createInfo(bookId, review) {
  return await bookInfoRepository.createReview(bookId, review);
}

async function deleteInfo(bookId, index) {
  return await bookInfoRepository.deleteReview(bookId, index);
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
