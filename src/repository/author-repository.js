const Author = require("./postgres/models/author-model");

async function create(author) {
  return await Author.create(author);
}

async function update(author) {
  await Author.update(author, {
    where: {
      autorId: author.autorId,
    },
  });

  return await getById(author.autorId);
}

async function deleteOne(autorId) {
  await Author.destroy({
    where: { autorId },
  });
}

async function get() {
  return await Author.findAll();
}

async function getById(authorId) {
  return await Author.findByPk(authorId);
}

module.exports = {
  create,
  update,
  deleteOne,
  get,
  getById,
};
