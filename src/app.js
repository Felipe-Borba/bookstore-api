const express = require("express");
const app = express();
const cors = require("cors");

const clientRouter = require("./router/client-router");
const bookInfoRouter = require("./router/book-router")
const authorRouter = require("./router/author-router")

app.use(express.json());
app.use(cors());
app.use("/cliente", clientRouter);
app.use("/livro", bookInfoRouter)
app.use("/autor", authorRouter)


app.use((err, req, res, _) => {
  console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

module.exports = app;
