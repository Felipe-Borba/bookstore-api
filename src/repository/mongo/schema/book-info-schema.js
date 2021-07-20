const mongoose = require("mongoose");
const reviewSchema = require("./review-schema");

const BookInfoSchema = new mongoose.Schema(
  {
    livroId: Number,
    descricao: String,
    paginas: Number,
    editora: String,
    avaliacoes: [reviewSchema],
  },
  { collection: "livro_info" }
);

module.exports = BookInfoSchema;