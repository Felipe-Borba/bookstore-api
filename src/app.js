const express = require("express");
const app = express();
const cors = require("cors");

const clientRouter = require("./router/client-router");
const bookInfoRouter = require("./router/book-info-router")

app.use(express.json());
app.use(cors());
app.use("/cliente", clientRouter);
app.use("/livro/info", bookInfoRouter)

app.use((err, req, res, _) => {
  console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

module.exports = app;
