const express = require("express");
const { check } = require("express-validator");
const authorController = require("../controller/author-controller.js");

const router = express.Router();

router.post(
  "/",
  check("nome", "nome is missing").notEmpty(),
  check("email", "email is missing").notEmpty(),
  check("telefone", "telefone is missing").notEmpty(),
  authorController.create
);
router.put(
  "/",
  check("autorId", "autorId is missing").notEmpty(),
  check("nome", "nome is missing").notEmpty(),
  check("email", "email is missing").notEmpty(),
  check("telefone", "telefone is missing").notEmpty(),
  authorController.update
);
router.delete("/:id", authorController.deleteById);
router.get("/", authorController.get);
router.get("/:id", authorController.getById);

module.exports = router;
