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

// router.post('/consulta-credito',
//   check('Nome', 'Nome deve ser informado').notEmpty(),
//   check('CPF', 'CPF deve ser informado').notEmpty(),
//   check('Valor', 'Valor deve ser um numero').notEmpty().isFloat(),
//   check('Parcelas', 'Parcelas deve ser um inteiro').notEmpty().isInt(),
//   async (req, res, next) => {
//     const erros = validationResult(req)
//     if (!erros.isEmpty()) {
//       return res.status(400).json({ erro: erros.array() })
//     }

//     try {
//       const valores = await consultaCliente.consultar(
//         req.body.Nome,
//         req.body.CPF,
//         req.body.Valor,
//         req.body.Parcelas
//       )
//       res.status(201).json(valores)
//     } catch (error) {
//       return res.status(405).json({ erro: error.message })
//     }
//   }
// )

module.exports = router;
