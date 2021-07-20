const Author = require("./postgres/models/author-model");

async function create(author) {
  return await Author.create(author);
}

async function update(author) {
  // TODO to be implemented
}

async function deleteOne(authorId) {
  // TODO to be implemented
}

async function get() {
  // TODO to be implemented
}

async function getById(authorId) {
  // TODO to be implemented
}

module.exports = {
  create,
  update,
  deleteOne,
  get,
  getById,
};
