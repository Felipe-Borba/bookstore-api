const { validationResult } = require("express-validator");
const clientService = require("../service/client-service");

async function createClient(req, res, next) {
  try {
    const validateError = validationResult(req);
    if (!validateError.isEmpty()) {
      return res.status(400).json({ error: validateError.array() });
    }

    const client = req.body;

    res.send(await clientService.create(client));
  } catch (error) {
    next(error);
  }
}

async function updateClient(req, res, next) {
  try {
    const validateError = validationResult(req);
    if (!validateError.isEmpty()) {
      return res.status(400).json({ error: validateError.array() });
    }
    const client = req.body;
    
    res.send("to be implemented");
  } catch (error) {
    next(error);
  }
}

async function deleteClient(req, res, next) {
  try {

    res.send("to be implemented");
  } catch (error) {
    next(error);
  }
}

async function getClients(req, res, next) {
  try {
    res.send("to be implemented");
  } catch (error) {
    next(error);
  }
}

async function getClient(req, res, next) {
  try {
    res.send("to be implemented");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createClient,
  updateClient,
  deleteClient,
  getClients,
  getClient,
};
