const mongoose = require("mongoose");

const BookInfoSchema = new mongoose.Schema(
  {
    livroId: Number,
    descricao: String,
    paginas: Number,
    editora: String,
    avaliacoes: [],
  },
  { collection: "livro_info", _id: false }
);

module.exports = BookInfoSchema;