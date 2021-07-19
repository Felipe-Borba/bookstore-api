const {connect} = require("./mongo/db") 
const Schema = require("./mongo/schema/book-info-schema")

async function create(bookInfo) {
  const mongoose = await connect();
  const BookInfo = mongoose.model("book_info", Schema);

  bookInfo = new BookInfo(bookInfo);
  return await bookInfo.save();
}

module.exports = {
  create
}