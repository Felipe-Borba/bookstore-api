const Client = require("./postgres/models/client-model");

async function create(client) {
  return await Client.create(client);
}

async function update(client) {
  await Client.update(client, {
    where: {
      clienteId: client.clienteId,
    },
  });

  return await getById(client.clienteId);
}

async function deleteOne(clienteId) {
  await Client.destroy({
    where: { clienteId },
  });
}

async function get() {
  return await Client.findAll();
}

async function getById(clientId) {
  return await Client.findByPk(clientId);
}

module.exports = {
  create,
  update,
  deleteOne,
  get,
  getById,
};
