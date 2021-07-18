const { validationResult } = require("express-validator");

async function createClient(req, res, next) {
  try {
    const validateError = validationResult(req);
    if (!validateError.isEmpty()) {
      return res.status(400).json({ error: validateError.array() });
    }
    
    const client = req.body;

    console.log(client);
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
  getClient,
};
