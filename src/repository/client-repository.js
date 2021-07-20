const Client = require("./postgres/models/client-model");

async function create(client) {
  return await Client.create(client);
}

async function update(client) {
}

async function deleteOne(clientId) {
}

async function get() {
}

async function getById(clientId) {
}

module.exports = {
  create,
  update,
  deleteOne,
  get,
  getById,
};
