const express = require("express");
const app = express();

app.use(express.json());

let pedidos = [
  { id: 1, cliente: "Kauan", produto: "Ice Cream Pot", status: "PENDENTE" },
];

app.get("/", (req, res) => {
  res.json({
    status: "API rodando com sucesso",
    modulo: "Full Cycle - Nível B",
  });
});

app.get("/pedidos", (req, res) => {
  res.json(pedidos);
});

app.post("/pedidos", (req, res) => {
  const { cliente, produto } = req.body;
  if (!cliente || !produto) {
    return res.status(400).json({ erro: "Cliente e produto são obrigatórios" });
  }
  const novoPedido = {
    id: pedidos.length + 1,
    cliente,
    produto,
    status: "CRIADO",
  };
  pedidos.push(novoPedido);
  res.status(201).json(novoPedido);
});

module.exports = app;
