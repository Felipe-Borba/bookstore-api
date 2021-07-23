const express = require("express");
const { check } = require("express-validator");
const controller = require("../controller/client-controller.js");
const { authorize } = require("../authorizer");

const router = express.Router();

router.post(
  "/",
  authorize("admin"),
  check("nome", "nome is missing").notEmpty(),
  check("email", "email is missing").notEmpty(),
  check("senha", "senha is missing").notEmpty(),
  check("telefone", "telefone is missing").notEmpty(),
  check("endereco", "endereco is missing").notEmpty(),
  controller.createClient
);
router.put(
  "/",
  authorize("admin", "client"),
  check("clienteId", "clienteId is missing").notEmpty(),
  check("nome", "nome is missing").notEmpty(),
  check("email", "email is missing").notEmpty(),
  check("senha", "senha is missing").notEmpty(),
  check("telefone", "telefone is missing").notEmpty(),
  check("endereco", "endereco is missing").notEmpty(),
  controller.updateClient
);
router.delete("/:id", authorize("admin"), controller.deleteClient);
router.get("/", authorize("admin"), controller.getClients);
router.get("/:id", authorize("admin"), controller.getClient);

module.exports = router;
