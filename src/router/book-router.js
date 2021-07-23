const express = require("express");
const { check } = require("express-validator");
const bookController = require("../controller/book-controller");
const { authorize } = require("../authorizer");

const router = express.Router();

router.post(
  "/",
  authorize("admin"),
  check("nome", "nome is missing").notEmpty(),
  check("valor", "valor is missing").notEmpty(),
  check("autorId", "autorId is missing").notEmpty(),
  check("estoque", "estoque is missing").notEmpty(),
  bookController.create
);

router.put(
  "/",
  authorize("admin"),
  check("livroId", "livroId is missing").notEmpty(),
  check("nome", "nome is missing").notEmpty(),
  check("valor", "valor is missing").notEmpty(),
  check("autorId", "autorId is missing").notEmpty(),
  check("estoque", "estoque is missing").notEmpty(),
  bookController.update
);
router.delete("/:id", authorize("admin"), bookController.deleteOne);
router.get("/", authorize("admin", "client"), bookController.get);
router.get("/:id", authorize("admin", "client"), bookController.getById);

router.post(
  "/info",
  authorize("admin"),
  check("livroId", "livroId is missing").notEmpty(),
  check("descricao", "descricao is missing").optional(),
  check("paginas", "paginas is missing").optional(),
  check("editora", "editora is missing").optional(),
  check("avaliacoes", "avaliacoes[] is missing").optional().isArray(),
  bookController.createBookInfo
);
router.put(
  "/info",
  authorize("admin"),
  check("livroId", "livroId is missing").notEmpty(),
  check("descricao", "descricao is missing").optional(),
  check("paginas", "paginas is missing").optional(),
  check("editora", "editora is missing").optional(),
  check("avaliacoes", "avaliacoes[] is missing").optional().isArray(),
  bookController.updateBookInfo
);
router.delete("/info/:id", authorize("admin"), bookController.deleteBookInfo);
router.post(
  "/:id/avaliacao",
  authorize("admin", "client"),
  check("nome", "nome is missing").notEmpty(),
  check("nota", "nota is missing").notEmpty(),
  check("avaliacao", "avaliacao is missing").notEmpty(),
  bookController.createInfo
);
router.delete(
  "/:id/avaliacao/:index",
  authorize("admin"),
  bookController.deleteInfo
);

module.exports = router;
