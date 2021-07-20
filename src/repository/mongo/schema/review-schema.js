const mongoose = require("mongoose");
const { INTEGER } = require("sequelize/types");

const reviewSchema = new mongoose.Schema(
  {
    nome: String,
    nota: Number,
    avaliacoe: String,
  },
  { collection: "livro_info", _id: false }
);

module.exports = reviewSchema;
