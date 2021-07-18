const request = require("supertest");
const app = require("../../src/app.js");

const params = {
  nome:'racoon',
  email: "email@email.com",
  senha: "123456",
  telefone: "1112223344",
  endereco:'rua sla'
}

describe("client-router", () => {
  it.only('POST /', async () => {
    const result = await request(app)
      .post("/cliente/")
      .send(params);

    console.log(result.status);
    console.log(result.text);
  })
  
  it("GET /", async () => {
    const result = await request(app).get("/cliente/");
    console.log(result.status);
    console.log(result.text);
  });
});
