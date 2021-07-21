const Book = require("./postgres/models/book-model");
const Author = require("./postgres/models/author-model");

async function create(book) {
  return await Book.create(book);
}

async function update(book) {
  await Book.update(book, {
    where: {
      livroId: book.livroId,
    },
  });

  return await getById(book.livroId);
}

async function deleteOne(livroId) {
  await Book.destroy({
    where: { livroId },
  });
}

async function get() {
  return await Book.findAll({
    include: [{ model: Author }],
  });
}

async function getById(bookId) {
  return await Book.findByPk(bookId, {
    include: [{ model: Author }],
  });
}

module.exports = {
  create,
  update,
  deleteOne,
  get,
  getById,
};
