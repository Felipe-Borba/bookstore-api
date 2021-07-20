const Sequelize = require("sequelize");
const db = require("../db");
const Book = require("./book-model")
const Client = require("./client-model")

const Sale = db.define(
  "vendas",
  {
    vandaId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    valor: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { underscored: true }
);
Sale.belongsTo(Book, { foreignKey: "livroId" });
Sale.belongsTo(Client, { foreignKey: "livroId" });

module.exports = Sale;
