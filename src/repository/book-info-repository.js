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

module.exports = {
  create
}