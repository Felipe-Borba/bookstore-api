const Client = require("./postgres/models/client-model");

async function create(client) {
  return await Client.create(client);
}

module.exports = {
  create,
};
