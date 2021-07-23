const express = require("express");
const app = express();
const cors = require("cors");
const basicAuth = require("express-basic-auth");

const clientRouter = require("./router/client-router");
const bookInfoRouter = require("./router/book-router");
const authorRouter = require("./router/author-router");
const saleRouter = require("./router/sale-router");
const clientRepository = require("./repository/client-repository");

app.use(express.json());
app.use(cors());

// function getRole(username) {
//     if (username == 'admin') {
//         return 'admin'
//     } else {
//         return 'client'
//     }
// }

// function authorize(...allowed) {

//     const isAllowed = role => allowed.indexOf(role) > -1;

//     return (req, res, next) => {

//         if (req.auth.user) {
//             const role = getRole(req.auth.user);

//             if (isAllowed(role)) {
//                 next()
//             } else {
//                 res.status(401).send('Role not allowed');
//             }
//         } else {
//             res.status(403).send('User not found');
//         }
//     }
// }

app.use(
  basicAuth({
    authorizer: (username, password) => {
      const userMatches = basicAuth.safeCompare(username, "admin");
      const pwdMatches = basicAuth.safeCompare(password, "admin");

      const client = clientRepository.getByEmail(username);
      const user2Matches = basicAuth.safeCompare(username, client.email ? client.email : '');
      const pwd2Matches = basicAuth.safeCompare(password, client.senha ? client.senha : '');

      return (userMatches && pwdMatches) || (user2Matches && pwd2Matches);
    },
  })
);

app.use("/cliente", clientRouter);
app.use("/livro", bookInfoRouter);
app.use("/autor", authorRouter);
app.use("/venda", saleRouter);

app.use((err, req, res, _) => {
  console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

module.exports = app;
