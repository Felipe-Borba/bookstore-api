const supertest = require("supertest");

const request = supertest("http://localhost:3000");

const params = {
  nome: "racoon",
  email: "email@email.com",
  senha: "123456",
  telefone: "1112223344",
  endereco: "rua sla",
};

describe("client-router", () => {
  it("POST /", async () => {
    const result = await request.post("/cliente/").send(params);

    console.log(result.status);
    console.log(result.body);
  });
});
