const express = require("express");
const { check } = require("express-validator");
const authorController = require("../controller/author-controller.js");
const { authorize } = require("../authorizer");

const router = express.Router();

router.post(
  "/",
  authorize("admin"),
  check("nome", "nome is missing").notEmpty(),
  check("email", "email is missing").notEmpty(),
  check("telefone", "telefone is missing").notEmpty(),
  authorController.create
);
router.put(
  "/",
  authorize("admin"),
  check("autorId", "autorId is missing").notEmpty(),
  check("nome", "nome is missing").notEmpty(),
  check("email", "email is missing").notEmpty(),
  check("telefone", "telefone is missing").notEmpty(),
  authorController.update
);
router.delete("/:id", authorize("admin"), authorController.deleteById);
router.get("/", authorize("admin"), authorController.get);
router.get("/:id", authorize("admin"), authorController.getById);

module.exports = router;
