const request = require("supertest");
const app = require("../src/app");

describe("Testes da API de Pedidos", () => {
  it("Deve retornar status 200 na rota raiz", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status");
  });

  it("Deve listar os pedidos cadastrados", async () => {
    const res = await request(app).get("/pedidos");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it("Deve criar um novo pedido com sucesso", async () => {
    const res = await request(app)
      .post("/pedidos")
      .send({ cliente: "Teste", produto: "Sorvete de Maracujá" });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.cliente).toEqual("Teste");
  });
});
