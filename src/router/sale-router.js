const express = require("express");
const { check } = require("express-validator");
const saleController = require("../controller/sale-controller");

router = express.Router();

router.post(
  "/",
  check("data", "data is missing").optional(),
  check("clienteId", "clienteId is missing").notEmpty(),
  check("livroId", "livroId is missing").notEmpty(),
  saleController.create
);
router.get("/:id", saleController.getById);
router.get("/", saleController.get);

module.exports = router;
