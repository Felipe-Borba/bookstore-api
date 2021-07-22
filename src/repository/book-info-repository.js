const { connect } = require("./mongo/db");
const Schema = require("./mongo/schema/book-info-schema");

async function createBookInfo() {
  const mongoose = await connect();
  return mongoose.model("book_info", Schema);
}

async function create(bookInfo) {
  const BookInfo = await createBookInfo();

  bookInfo = new BookInfo(bookInfo);
  return await bookInfo.save();
}

async function getByBookId(livroId) {
  const BookInfo = await createBookInfo();

  const query = BookInfo.findOne({ livroId });
  return await query.exec();
}

async function update(bookInfo) {
  const BookInfo = await createBookInfo();

  return await BookInfo.findOneAndUpdate(
    { livroId: bookInfo.livroId },
    bookInfo
  );
}

async function deleteOne(livroId) {
  const BookInfo = await createBookInfo();

  return await BookInfo.deleteOne({ livroId }).exec();
}

async function createReview(bookId, review) {
  const bookInfo = await getByBookId(bookId);

  bookInfo.avaliacoes.push(review);
  return await update(bookInfo);
}

async function deleteReview(bookId, index) {
  const bookInfo = await getByBookId(bookId);

  bookInfo.avaliacoes.splice(index, 1);

  return await update(bookInfo);
}

module.exports = {
  create,
  update,
  getByBookId,
  deleteOne,
  createReview,
  deleteReview,
};
