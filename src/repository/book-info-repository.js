const {connect} = require("./mongo/db") 
const Schema = require("./mongo/schema/book-info-schema")

async function createBookInfo() {
  const mongoose = await connect();
  return mongoose.model("book_info", Schema); 
}

async function create(bookInfo) {
  const BookInfo = await createBookInfo();

  bookInfo = new BookInfo(bookInfo);
  return await bookInfo.save();
}

async function update(bookInfo) {
  
}

async function deleteOne(bookId) {
  
}

async function createReview(review) {
  
}

async function deleteReview(index) {
  
}

module.exports = {
  create,
  update,
  deleteOne,
  createReview,
  deleteReview
}