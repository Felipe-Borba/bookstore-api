const authorRepository = require("../repository/author-repository");

async function create(author) {
  return await authorRepository.create(author);
}

async function update(author) {
  return await authorRepository.update(author);
}

async function deleteOne(authorId) {
  // TODO block if this author have any book
  return await authorRepository.deleteOne(authorId);
}

async function get() {
  return await authorRepository.get();
}

async function getById(authorId) {
  return await authorRepository.create(authorId);
}

module.exports = {
  create,
  update,
  deleteOne,
  get,
  getById,
};
