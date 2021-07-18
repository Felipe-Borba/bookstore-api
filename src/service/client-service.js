const clientRepository = require("../repository/client-repository");

async function create(client) {
  return await clientRepository.create(client);
}

module.exports = {
  create,
};
