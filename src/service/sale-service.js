const saleRepository = require("../repository/sale-repository");
const bookRepository = require("../repository/book-repository");

async function create(sale) {
  const book = await bookRepository.getById(sale.livroId);
  const date = new Date();

  const enrichSale = {
    data: date,
    valor: +book.valor,
    ...sale,
  };
  console.log(enrichSale);
  return await saleRepository.create(enrichSale);
}

async function getById(saleId) {
  return await saleRepository.getById(saleId);
}

async function get(filter) {
  return await saleRepository.get(filter);
}

module.exports = {
  create,
  getById,
  get,
};
