const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost", // postgres_db",
  port: 49153,
  database: "mydb",
  username: "root",
  password: "example",
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
