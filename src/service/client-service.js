const clientRepository = require("../repository/client-repository");

async function create(client) {
  return await clientRepository.create(client);
}

async function update(client) {
  return await clientRepository.update(client);
}

async function deleteOne(clientId) {
  // TODO block if this client have any sales
  return await clientRepository.deleteOne(clientId);
}

async function get() {
  //TODO do not return password field
  return await clientRepository.get(); 
}

async function getById(clientId) {
  //TODO do not return password field
  return await clientRepository.getById(clientId);
}

module.exports = {
  create,
  update,
  deleteOne,
  get,
  getById,
};
