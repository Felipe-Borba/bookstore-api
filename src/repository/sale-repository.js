const Sale = require("./postgres/models/sale-model");
const Book = require("./postgres/models/book-model");
const Client = require("./postgres/models/client-model");
const Author = require("./postgres/models/author-model");

async function create(sale) {
  return await Sale.create(sale);
}

async function update(sale) {
  await Sale.update(sale, {
    where: {
      vendaId: sale.vendaId,
    },
  });

  return await getById(sale.vendaId);
}

async function deleteOne(vendaId) {
  await Sale.destroy({
    where: { vendaId },
  });
}

async function get() {
  return await Sale.findAll({
    include: [
      { model: Client },
      {
        model: Book,
        include: [{ model: Author }],
      },
    ],
  });
}

async function getById(saleId) {
  return await Sale.findByPk(saleId, {
    include: [
      { model: Client },
      {
        model: Book,
        include: [{ model: Author }],
      },
    ],
  });
}

module.exports = {
  create,
  update,
  deleteOne,
  get,
  getById,
};
