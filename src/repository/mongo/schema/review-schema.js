const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    nome: String,
    conteudo: String,
  },
  { collection: "livro_info", _id: false }
);

module.exports = reviewSchema;
