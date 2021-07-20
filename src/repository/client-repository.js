const Client = require("./postgres/models/client-model");

async function create(client) {
  return await Client.create(client);
}

async function update(client) {
  // TODO to be implemented
}

async function deleteOne(clientId) {
  // TODO to be implemented
}

async function get() {
  // TODO to be implemented
}

async function getById(clientId) {
  // TODO to be implemented
}

module.exports = {
  create,
  update,
  deleteOne,
  get,
  getById,
};
