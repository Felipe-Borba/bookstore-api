const express = require("express");
const { check } = require("express-validator");
const saleController = require("../controller/sale-controller");
const { authorize } = require("../authorizer");

router = express.Router();

router.post(
  "/",
  authorize("admin", "client"),
  check("data", "data is missing").optional(),
  check("clienteId", "clienteId is missing").notEmpty(),
  check("livroId", "livroId is missing").notEmpty(),
  saleController.create
);
router.get("/:id", authorize("admin"), saleController.getById);
router.get("/", authorize("admin", "client"), saleController.get);

module.exports = router;
