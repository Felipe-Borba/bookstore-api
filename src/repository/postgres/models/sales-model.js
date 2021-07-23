const Sequelize = require("sequelize");
const db = require("../db");
const Book = require("./book-model");
const Client = require("./client-model");

const Sale = db.define(
  "vendas",
  {
    vendaId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    valor: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  { underscored: true }
);
Sale.belongsTo(Book, { foreignKey: "livroId" });
Sale.belongsTo(Client, { foreignKey: "clienteId" });

module.exports = Sale;
