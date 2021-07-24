const saleRepository = require("../repository/sale-repository");
const bookRepository = require("../repository/book-repository");

async function create(sale) {
  // TODO as if the client that come from auth make a purchase
  const book = await bookRepository.getById(sale.livroId);
  const date = new Date();

  const enrichSale = {
    data: date,
    valor: +book.valor,
    ...sale,
  };
  return await saleRepository.create(enrichSale);
}

async function getById(saleId) {
  return await saleRepository.getById(saleId);
}

async function get(filter) {
  // TODO only their own purchase
  return await saleRepository.get(filter);
}

module.exports = {
  create,
  getById,
  get,
};
