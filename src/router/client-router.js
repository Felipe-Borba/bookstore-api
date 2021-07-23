const express = require("express");
const { check } = require("express-validator");
const controller = require("../controller/client-controller.js");

const router = express.Router();

router.post(
  "/",
  check("nome", "nome is missing").notEmpty(),
  check("email", "email is missing").notEmpty(),
  check("senha", "senha is missing").notEmpty(),
  check("telefone", "telefone is missing").notEmpty(),
  check("endereco", "endereco is missing").notEmpty(),
  controller.createClient
);
router.put(
  "/",
  check("clienteId", "clienteId is missing").notEmpty(),
  check("nome", "nome is missing").notEmpty(),
  check("email", "email is missing").notEmpty(),
  check("senha", "senha is missing").notEmpty(),
  check("telefone", "telefone is missing").notEmpty(),
  check("endereco", "endereco is missing").notEmpty(),
  controller.updateClient
);
router.delete("/:id", controller.deleteClient);
router.get("/", controller.getClients);
router.get("/:id", controller.getClient);

module.exports = router;
