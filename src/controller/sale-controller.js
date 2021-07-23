const saleService = require("../service/sale-service");
const { validationResult, matchedData } = require("express-validator");

async function create(req, res, next) {
  try {
    const validateError = validationResult(req);
    if (!validateError.isEmpty()) {
      return res.status(400).json({ error: validateError.array() });
    }

    const sale = matchedData(req);
    res.send(await saleService.create(sale));
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const saleId = req.params.id;

    res.send(await saleService.getById(saleId));
  } catch (error) {
    next(error);
  }
}

async function get(req, res, next) {
  try {
    const filter = { ...req.query };

    res.send(await saleService.get(req.query));
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  getById,
  get,
};
