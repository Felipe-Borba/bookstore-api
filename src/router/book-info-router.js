const express = require("express");
const controller = require("../controller/book-info-controller")

const router = express.Router();

router.post("/", controller.createBookInfo);

module.exports = router;