const mongoose = require("mongoose");

async function connect() {
  const username = "root";
  const password = "pass12345";
  const uri = `mongodb://${username}:${password}@localhost:27017/api_data`;
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = { connect };