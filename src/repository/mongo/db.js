const mongoose = require("mongoose");

async function connect() {
  const uri = 'mongodb://localhost:27017/api_data'
  return await mongoose.connect(uri, {
    auth: {
      "authSource": "admin"
    },
    user: "root",
    pass: "pass12345"
  });
}

module.exports = { connect };