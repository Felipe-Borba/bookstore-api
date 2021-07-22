const express = require("express");
const { check } = require("express-validator");
const bookController = require("../controller/book-controller");

const router = express.Router();

router.post(
  "/",
  check("nome", "nome is missing").notEmpty(),
  check("valor", "valor is missing").notEmpty(),
  check("autorId", "autorId is missing").notEmpty(),
  check("estoque", "estoque is missing").notEmpty(),
  bookController.create
);

router.put(
  "/",
  check("livroId", "livroId is missing").notEmpty(),
  check("nome", "nome is missing").notEmpty(),
  check("valor", "valor is missing").notEmpty(),
  check("autorId", "autorId is missing").notEmpty(),
  check("estoque", "estoque is missing").notEmpty(),
  bookController.update
);
router.delete("/:id", bookController.deleteOne);
router.get("/", bookController.get);
router.get("/:id", bookController.getById);

router.post(
  "/info",
  check("livroId", "livroId is missing").notEmpty(),
  check("descricao", "descricao is missing").optional(),
  check("paginas", "paginas is missing").optional(),
  check("editora", "editora is missing").optional(),
  check("avaliacoes", "avaliacoes[] is missing").optional().isArray(),
  bookController.createBookInfo
);
router.put(
  "/info",
  check("livroId", "livroId is missing").notEmpty(),
  check("descricao", "descricao is missing").optional(),
  check("paginas", "paginas is missing").optional(),
  check("editora", "editora is missing").optional(),
  check("avaliacoes", "avaliacoes[] is missing").optional().isArray(),
  bookController.updateBookInfo
);
router.delete("/info/:id", bookController.deleteBookInfo);
router.post(
  "/:id/avaliacao",
  check("nome", "nome is missing").notEmpty(),
  check("nota", "nota is missing").notEmpty(),
  check("avaliacao", "avaliacao is missing").notEmpty(),
  bookController.createInfo
);
router.delete("/:id/avaliacao/:index", bookController.deleteInfo);

module.exports = router;
