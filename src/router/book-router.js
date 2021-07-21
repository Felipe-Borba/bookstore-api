const express = require("express");
const { check } = require("express-validator");
const controller = require("../controller/book-controller");
const bookInfoRouter = require("./book-info-router");

const router = express.Router();

// router.post(
//   "/info",
//   check("livroId", "livroId is missing").notEmpty(),
//   check("descricao", "descricao is missing").optional(),
//   check("paginas", "paginas is missing").optional(),
//   check("editora", "editora is missing").optional(),
//   check("avaliacoes", "avaliacoes[] is missing").optional().isArray(),
//   controller.createBookInfo
// );

router.use("/info", bookInfoRouter);

module.exports = router;
